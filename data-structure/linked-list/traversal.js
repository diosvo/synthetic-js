class Node {
  constructor(value) {
    this.value = value;
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

///   A -> B -> C -> D -> NULL
///   head

// 🔁 While loop first

// const linkedList = (head) => {
//   let current = head;

//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

/// 🔄 Recursion

const linkedList = (head) => {
  if (head === null) return;
  console.log(head.value);
  linkedList(head.next);
};

linkedList(a);
