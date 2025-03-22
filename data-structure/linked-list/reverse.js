/** 🔁 Iterative
 * Reverses the singly linked list
 *
 * head = head of the linked list
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */

const reverseList = (head) => {
  let prev = null; // A become to be tail
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// Original: A -> B -> C
// 🔆 Idea: set the narrow to point to NULL (the current.next represent as narrow)
// `prev` mean the new tail

// NULL     ->      A     ->      B     ->      C
// prev          current        next
// NULL     <-      A             B     ->      C
//                prev         current         next
// NULL     <-      A     <-      B             C
//                               prev         current  (next = null)
// NULL     <-      A     <-      B     <-      C
