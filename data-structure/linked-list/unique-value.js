/** 🔆 Idea
 * 1. Create a current node at the head of the list.
 * 2. If head.val != current.val -> returns false.
 * 3. If finish traversing (current == null) -> returns true
 */

/** 🔄 Recursive
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @return {ListNode} A sorted linked list.
 */
const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;

  // Do not return false if prevVal is the first node
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

/** 🔁 Iterative
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {boolean} Indicate whether or not the linked list contains exactly one unique value.
 */
// const isUnivalueList = (head) => {
//   let current = head;

//   while (current !== null) {
//     if (head.val !== current.val) return false;
//     current = current.next;
//   }

//   return true;
// };
