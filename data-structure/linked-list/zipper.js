/**
 * 1. Start with a counter = 0 to track alternating selections
 * 2. Use 'tail' to track the growing combined list
 * 3. At each step:
 *    - If counter is even: take from list2
 *    - If counter is odd: take from list1
 *    - Increment counter after each connection
 * 4. When either list is exhausted (null):
 *    - Simply attach the remaining nodes from the non-empty list
 * 5. Throughout the process:
 *    - 'tail' always points to the last node in our result
 *    - We constantly re-route next pointers to create the zigzag pattern
 */

/** 🔁 Iterative
 * Zip 2 list nodes together
 *
 * n = number of list 1
 *
 * m = number of list 2
 *
 * ⏱️ Time: O(min(n, m)) - 🚀 Space: O(1)
 */
// const zipperLists = (head1, head2) => {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count += 1;
//   }

//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;

//   return head1;
// };

/** 🔄 Recursive
 * Zip 2 list nodes together
 *
 * n = number of list 1
 *
 * m = number of list 2
 *
 * ⏱️ Time: O(min(n, m)) - 🚀 Space: O(min(n, m))
 */
const zipperLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  head1.next = zipperLists(head2, head1.next);

  return head1;
};
