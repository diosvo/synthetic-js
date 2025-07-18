/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const getNodeValue = (head, index) => {
  let i = 0;
  let current = head;

  while (current !== null) {
    if (i === index) return current.val;
    current = current.next;
    i += 1;
  }

  return null;
};

/** 🔄 Recursive
 *
 * @description Set the passed index to the head node and decrement it until the index reaches 0.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function getNodeValue(head, index) {
  if (head === null) return null;
  if (index === 0) return head.val;

  return getNodeValue(head.next, index - 1);
}

getNodeValue(a, 2); // -> 'C'
