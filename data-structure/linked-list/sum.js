/** 🔁 Iterative
 *
 * @description Add up values by iterating through each node
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const sumList = (head) => {
  let sum = 0;
  let current = head;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

/** 🔄 Recursive
 *
 * @description Add up values by iterating through each node
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space complexity due to call stack)
 */
function sumList(head) {
  if (head === null) return 0;
  return head.val + sumList(head.next);
}

sumList(a); // -> 19
