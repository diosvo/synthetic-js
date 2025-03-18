/** 🔁 Iterative
 * Search for target value by iterating through each node
 *
 * n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
// const linkedListFind = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
// };

/** 🔄 Recursive
 * Search for target value by recursively checking each node
 *
 * n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space complexity due to call stack)
 */
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;

  return linkedListFind(head.next, target);
};
