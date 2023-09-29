// reorderDraggable.js
function reorderable(node: HTMLElement) {
  let selectedItem: any = null;

  node.addEventListener('dragstart', (event: any) => {
    selectedItem = event.target;
    event.dataTransfer.setData('text/plain', '');
    selectedItem.classList.add('drag-sort-active');
  });

  node.addEventListener('dragover', (event: any) => {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    const swapItem: any = document.elementFromPoint(x, y);

    if (selectedItem && selectedItem !== swapItem) {
      const list = selectedItem.parentNode;
      const items = Array.from(list.children);
      const selectedIndex = items.indexOf(selectedItem);
      const swapIndex = items.indexOf(swapItem);

      if (selectedIndex !== -1 && swapIndex !== -1) {
        list.insertBefore(
          selectedItem,
          swapIndex < selectedIndex ? swapItem : swapItem.nextSibling
        );
      }
    }
  });

  node.addEventListener('dragend', () => {
    if (selectedItem) {
      selectedItem.classList.remove('drag-sort-active');
      selectedItem = null;
    }
  });
}

export default reorderable;
