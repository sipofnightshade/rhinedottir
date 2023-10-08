export function escape(node: HTMLElement, callback: () => void): { destroy: () => void } {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback();
    }
  };

  document.addEventListener('keydown', handleEscape);

  return {
    destroy() {
      document.removeEventListener('keydown', handleEscape);
    }
  };
}
