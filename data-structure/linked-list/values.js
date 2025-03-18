/** 🔁 Iterative
 * Collect all node values in an array through iteration
 *
 * n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const linkedListValues = (head) => {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

linkedListValues(a); // -> ['A', 'B', 'C', 'D']
