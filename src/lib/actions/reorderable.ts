type SortCallback = (items: HTMLElement[]) => void;

// reorderDraggable.js
function reorderable(node: HTMLElement, onSort: SortCallback) {
  let selectedItem: HTMLElement | null = null;

  function handleDragStart(event: DragEvent) {
    if (event.target instanceof HTMLElement) {
      selectedItem = event.target;
      event.dataTransfer?.setData('text/plain', '');
      selectedItem.classList.add('drag-sort-active');
    }
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    const swapItem = document.elementFromPoint(x, y) as HTMLElement | null;

    if (selectedItem && swapItem && selectedItem !== swapItem) {
      const list = selectedItem.parentNode as HTMLElement;
      const items = Array.from(list.children) as HTMLElement[];
      const selectedIndex = items.indexOf(selectedItem);
      const swapIndex = items.indexOf(swapItem);

      if (selectedIndex !== -1 && swapIndex !== -1) {
        list.insertBefore(
          selectedItem,
          swapIndex < selectedIndex ? swapItem : swapItem?.nextSibling
        );
      }

      if (onSort && typeof onSort === 'function') {
        // Invoke the callback function with the updated items order
        onSort(Array.from(list.children) as HTMLElement[]);
      }
    }
  }

  function handleDragEnd() {
    if (selectedItem) {
      selectedItem.classList.remove('drag-sort-active');
      selectedItem = null;
    }
  }

  node.addEventListener('dragstart', handleDragStart);
  node.addEventListener('dragover', handleDragOver);
  node.addEventListener('dragend', handleDragEnd);

  return {
    destroy() {
      node.removeEventListener('dragstart', handleDragStart);
      node.removeEventListener('dragover', handleDragOver);
      node.removeEventListener('dragend', handleDragEnd);
    }
  };
}

export default reorderable;
