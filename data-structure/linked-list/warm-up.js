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

/// A -> B -> C -> D -> NULL
/// head           tail

/** 🔁 Iterative
 * Traverse through each node of the linked list
 *
 * n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
// const linkedList = (head) => {
//   let current = head;

//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

/** 🔄 Recursive
 * Recursively process each node, moving to the next node
 *
 * n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space complexity due to call stack)
 */
const linkedList = (head) => {
  if (head === null) return;
  console.log(head.value);
  linkedList(head.next);
};
