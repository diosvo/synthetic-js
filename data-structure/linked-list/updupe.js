/** 🔆 Idea
 * 1. Create a dummy head node.
 * 2.
 *    2.1. If current.value !== tail.value
 *         -> create new node with current value.
 *         -> move 2 pointers to the next node.
 *    2.2. Otherwise, just move the current pointer to the next node.
 */

/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const undupeSortedLinkedList = (head) => {
  let current = head;

  const dummyHead = new Node(null);
  let tail = dummyHead;

  while (current !== null) {
    if (current.val !== tail.val) {
      tail.next = new Node(current.val);
      tail = tail.next;
    }

    current = current.next;
  }

  return dummyHead.next;
};
