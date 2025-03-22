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
 *
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

linkedList(a); // -> 'A', 'B', 'C', 'D'
