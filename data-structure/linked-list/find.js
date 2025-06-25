/** 🔁 Iterative
 *
 * @description Search for target value by iterating through each node
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space complexity due to call stack)
 */
function linkedListFind(head, target) {
  if (head === null) return false;
  if (head.val === target) return true;

  return linkedListFind(head.next, target);
}
