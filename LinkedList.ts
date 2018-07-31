interface INode {
  value: any;
  next?: INode;
}

export default class LinkedList {
  head?: INode;

  constructor(head?: INode) {
    this.head = head;
  }

  last() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  findPrevious(value) {
    if (!this.head) {
      return undefined;
    }
    let node = this.head;
    while (node.next && node.next.value !== value) {
      node = node.next;
    }
    if (!node.next) {
      return undefined;
    }
    return node;
  }

  find(value) {
    const previous = this.findPrevious(value);
    return previous && previous.next;
  }

  /**
   * O(1)
   * insert a node at the front of the list.
   */
  insertFirst(value: any) {
    this.head = { value, next: this.head };
  }

  insertLast(value: any) {
    if (!this.head) {
      this.head = { value };
      return;
    }
    const last = this.last();
    last.next = { value };
  }

  insertBefore(targetValue: any, value: any) {
    const node = this.findPrevious(targetValue);
    if (!node) return false;
    node.next = { value, next: node.next };
    return true;
  }

  insertAfter(targetValue: any, value: any) {
    const node = this.find(targetValue);
    if (!node) return false;
    node.next = { value, next: node.next };
    return true;
  }

  remove(value: any) {
    const node = this.findPrevious(value);
    if (!node) return false;
    node.next = node.next.next;
    return true;
  }

  removeFirst() {
    const head = this.head;
    if (!head) {
      return undefined;
    }
    this.head = head.next;
    delete head.next;
    return head;
  }

  removeLast() {
    let node = this.head;
    if (!node) {
      return undefined;
    }
    if (!node.next) {
      this.head = undefined;
      return undefined;
    }
    while (node.next && node.next.next) {
      node = node.next;
    }
    const deleted = node.next;
    delete node.next;
    return deleted;
  }
}
