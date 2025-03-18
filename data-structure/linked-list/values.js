class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

/// A -> B -> C -> D -> NULL
/// head

// 🔁 Iterative

const linkedListValues = (head) => {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

linkedListValues(a); // -> ['A', 'B', 'C', 'D']
