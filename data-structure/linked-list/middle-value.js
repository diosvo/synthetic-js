/** 🔆 Idea
 * 1. Split the linked list into half - `Math.floor`
 * 2. Use fast/slow pointer technique:
 *    - Fast pointer moves 2 steps at a time.
 *    - Slow pointer moves 1 step at a time.
 *    → When the fast pointer reaches the end, the slow pointer will be at the middle.
 */

/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
function middleValue(head) {
  let slow = head;
  let fast = head;

  while (!(fast === null || fast.next === null)) {
    slow = slow.next; // Move 1 step
    fast = fast.next.next; // Move 2 steps
  }

  return slow.value;
}

middleValue(a); // C

// A  ->  B  -> [C] ->  D  ->  E
//f/s
//        s      f
//               s             f

/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns The middle value of a linked list.
 */
const middleValue = (head) => {
  let current = head;
  const result = [];

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  const middle = Math.floor(result.length / 2);

  return result[middle];
};
