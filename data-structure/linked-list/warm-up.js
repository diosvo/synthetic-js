/** 🔁 Iterative
 *
 * @description Traverse through each node of the linked list
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const linkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

/** 🔄 Recursive
 *
 * @description Recursively process each node, moving to the next node
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space complexity due to call stack)
 */
function linkedList(head) {
  if (head === null) return;

  linkedList(head.next);
}

linkedList(a); // -> 'A', 'B', 'C', 'D'
