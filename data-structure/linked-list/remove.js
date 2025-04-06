/** 🔆 Idea
 * 1. Create a prev pointer to track the previous node.
 * 2. Traverse the linked list:
 *    - current.val == target -> prev.next = current.next
 *    - set prev to current
 * 4. Edge cases: Remove head/tail node.
 *
 * Do it in place.
 */

/** 🔁 Iterative
 *
 * @description Delete the node containing the target value.
 *
 * - n = # of list
 *
 * @return The head of the modified linked list
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const removeNode = (head, target) => {
  // Edge case: Remove the first/last node.
  if (head.val === target) return head.next;

  let prev = null;
  let current = head;

  while (current !== null) {
    if (current.val === target) {
      prev.next = current.next;
      break;
    }

    prev = current;
    current = current.next;
  }

  return head;
};

// ·    -> A      ->      B      ->      C      ->      D
// prev -> current                       target
//         prev    ->     current
//                        prev   ->      current

/** 🔄 Recursive
 *
 * - n = # of list
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
// const removeNode = (head, target) => {
//   // Base case: if the list is empty
//   if (head === null) return null;

//   // Recursive case: traverse the list
//   head.next = removeNode(head.next, target);

//   // If the current node's value matches the target, skip it
//   return head.val === target ? head.next : head;
// };
