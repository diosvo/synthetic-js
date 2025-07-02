class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    if (this.size === 0) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }

    this.size += 1;
  }

  dequeue() {
    // Edge case
    if (this.size === 0) return null;

    // Keep value before removal
    const value = this.head.val;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size -= 1;

    return value;
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.size; // -> 1
queue.dequeue(); // -> a
queue.enqueue('b');
queue.enqueue('c');
queue.size; // -> 2
queue.dequeue(); // -> b
queue.dequeue(); // -> c
queue.size; // -> 0
