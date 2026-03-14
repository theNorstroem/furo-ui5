/**
 * This method allows you to build NavigationGroups. In a NavigationGroup only one element receives the focus by `tab`.
 * At the moment an element of the group has the focus, the navigation is done by the arrow keys.
 * Pressing tab will lead you to the next focusable element, this can also be a NavigationGroup.
 *
 *
 * @param container {HTMLElement | HTMLSlotElement} - The container which builds the group.
 * @param itemselector {selector} - The css selector to select the elements to navigate.
 * @constructor
 */
export const NavigationGroup = (container: HTMLElement | HTMLSlotElement | null, itemselector: string) => {
  let nodes: unknown[];
   
  itemselector = itemselector || "*";

  if (container === null) {
    return;
  }

  interface Closable {
    close?: () => void;
  }

  const keyHandler = (e: KeyboardEvent) => {
    const current = e.target;

    if (container instanceof HTMLSlotElement) {
      nodes = [];
      container.assignedElements({ flatten: true }).forEach((n) => {
        if (n.matches(itemselector)) {
          nodes.push(n);
        }
      });
    } else {
      nodes = Array.from(container.querySelectorAll(itemselector));
    }

    const currentIndex = nodes.indexOf(current) || 0;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (currentIndex + 1 < nodes.length) {
        nodes.forEach((k) => {
          (k as HTMLElement).setAttribute("tabindex", "-1");
        });
        if ((nodes[currentIndex] as Closable).close !== undefined) {
          (nodes[currentIndex] as Closable).close!();
        }

        (nodes[currentIndex + 1] as HTMLElement).setAttribute("tabindex", "0");
        (nodes[currentIndex + 1] as HTMLElement).focus();
      }
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (currentIndex - 1 >= 0) {
        nodes.forEach((k) => {
          (k as HTMLElement).setAttribute("tabindex", "-1");
        });
        if ((nodes[currentIndex] as Closable).close !== undefined) {
          (nodes[currentIndex] as Closable).close!();
        }
        (nodes[currentIndex - 1] as HTMLElement).setAttribute("tabindex", "0");
        (nodes[currentIndex - 1] as HTMLElement).focus();
      }
    }
  };

  if (container instanceof HTMLSlotElement) {
    nodes = [];
    container.assignedElements({ flatten: true }).forEach((n) => {
      if (n.matches(itemselector)) {
        nodes.push(n);
      }
    });

    container.addEventListener("keyup", keyHandler);
  } else {
    nodes = Array.from(container.querySelectorAll(itemselector));
    container.addEventListener("keyup", keyHandler);
  }

  if (nodes.length) {
    nodes.forEach((k) => {
      (k as HTMLElement).setAttribute("tabindex", "-1");
    });
    if (nodes[0] !== undefined) {
      (nodes[0] as HTMLElement).removeAttribute("tabindex");
    }
  }

  /**
   *
   * todo: add a setTabindex method which handles ui5-button separately
   * on the ui5-button the tabindex should be set to the button element in its shadow root.
   */
};
