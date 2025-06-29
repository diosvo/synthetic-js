/** 🔁 Iterative
 *
 * @argument {Array} values - The values of the nodes.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const createLinkedList = (values) => {
  const dummyNode = new Node(null);
  let tail = dummyNode;

  for (let value of values) {
    tail.next = new Node(value);
    tail = tail.next;
  }

  return dummyNode.next;
};

createLinkedList(['h', 'e', 'y']); // h -> e -> y
createLinkedList(['a']); // a
createLinkedList([]); // null

/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function createLinkedList(values, index = 0) {
  // Base case: the end of the linked list
  if (index === values.length) return null;

  const head = new Node(values[index]);
  head.next = createLinkedList(values, index + 1);

  return head;
}
