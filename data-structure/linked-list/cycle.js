/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const linkedListCycle = (head) => {
  let fast = head;
  let slow = head;
  let firstIteration = false;

  while (!(fast === null || fast.next === null)) {
    if (slow === fast && !firstIteration) return true; // Cycle detected

    slow = slow.next; // Move 1 step
    fast = fast.next.next; // Move 2 steps
    firstIteration = true;
  }

  return false;
};

//         _______
//       /        \
// a -> b -> c -> d
linkedListCycle(a); // true

/**
 * @description A linked list has a cycle if there exists a node that can be revisited by continuously following the next pointers.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} - Returns true if a cycle is detected, otherwise false.
 */
function linkedListCycle(head) {
  if (head == null) return false;

  const nodes = new Set();
  let current = head;

  while (current !== null) {
    if (nodes.has(current)) return true;
    nodes.add(current);
    current = current.next;
  }

  return false;
}
