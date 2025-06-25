/** 🔁 Iterative
 *
 * @description Insert a new node with the value into the list at the specified index.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 * @return The head of the modified linked list
 */
const insertNode = (head, value, index) => {
  // Edge case: Insert the first/last node.
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let counter = 0;
  let current = head;

  while (current !== null) {
    // Insertion point to stop to add the new node
    if (counter === index - 1) {
      const temp = current.next;
      current.next = new Node(value);
      // Chain the remaining nodes
      current.next.next = temp;
    }

    counter++;
    current = current.next;
  }

  return head;
};

// When counter = index - 1
// 0      ->      1      ->      2      ->      3
// A      ->      B      ->      C      ->      D
//                current        temp

// After insertion
// 0      ->      1      ->      2      ->      3      ->      4
// A      ->      B      ->      X      ->      C      ->      D
