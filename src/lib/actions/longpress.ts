import type { Action } from 'svelte/action';

interface Attributes {
  'on:longpress'?: (event: CustomEvent) => void;
}
type LongPressAction = Action<HTMLElement, number, Attributes>;

export const longpress: LongPressAction = (node, threshold = 500) => {
  const handle_pointerdown = () => {
    const longpressEvent = new CustomEvent('longpress');

    const timeout = setTimeout(() => {
      node.dispatchEvent(longpressEvent);
    }, threshold);

    const cancel = () => {
      clearTimeout(timeout);
      node.removeEventListener('pointermove', cancel);
      node.removeEventListener('pointerup', cancel);
    };

    node.addEventListener('pointermove', cancel);
    node.addEventListener('pointerup', cancel);
  };

  node.addEventListener('pointerdown', handle_pointerdown);

  return {
    destroy() {
      node.removeEventListener('pointerdown', handle_pointerdown);
    }
  };
};
