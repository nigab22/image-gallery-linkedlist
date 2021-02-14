export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export const DoublyLinkedList = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return false;

    let removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail.prev = null;
      this.tail = newTail;
    }

    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return false;

    let removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      this.head.prev = null;
    }

    this.length--;
    return removed;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  getNodeAtIndex(index) {
    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    } else {
      let current = this.head;
      let counter = 0;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  setNodeAtIndex(index, value) {
    let node = this.getNodeAtIndex(index);
    if (node) {
      node.value = value;
      return node;
    }
    return null;
  }

  insertAtIndex(index, value) {
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const insertAfter = this.getNodeAtIndex(index - 1);
      const insertBefore = insertAfter.next;
      newNode.prev = insertAfter;
      newNode.next = insertBefore;
      insertAfter.next = newNode;
      insertBefore.prev = newNode;
      this.length++;
    }
    return this;
  }

  removeAtIndex(index) {
    const removed = this.getNodeAtIndex(index);
    if (index >= this.length) {
      return false;
    }
    if (index == 0) {
      removed = this.shift();
    } else if (index == this.length - 1) {
      removed = this.pop();
    } else {
      let removeBefore = removed.next;
      let removeAfter = removed.prev;
      removeBefore.prev = removeAfter;
      removeAfter.next = removeBefore;
      removed.prev = null;
      removed.next = null;
      this.length--;
    }
    return removed;
  }

  getLength() {
    return this.length;
  }
};

/***Test Cases****/
// let dll = new DoublyLinkedList();
// dll.push('apple');
// dll.push('orange');
// dll.push('mango');
// dll.push('peach');
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.unshift('banana'));
// console.log(dll.unshift('kiwi'));
// dll.setNodeAtIndex(1, 'blueberry');
// dll.insertAtIndex(2, 'coconut');
// dll.insertAtIndex(3, 'pineapple');
// dll.removeAtIndex(2);
// dll.getNodeAtIndex(3);
// console.log(dll);
