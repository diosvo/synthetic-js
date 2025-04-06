/** 🔆 Idea
 * 1. Select the smaller value from both lists.
 * 2. Create a dummy node, compare the two nodes.
 * 3. Insert the smaller value into the sorted linked list.
 */

/** 🔄 Recursive
 *
 * - n = # of list 1
 * - m = # of list 2
 *
 * ⏱️ Time: O(min(n, m)) - 🚀 Space: O(min(n, m))
 *
 * @return {ListNode} A sorted linked list.
 */
const mergeLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
};

/** 🔁 Iterative
 *
 * @description Merge the two lists together into **single sorted** linked list.
 *
 * Do this in-place, by mutating the original Nodes.
 *
 * - n = # of list 1
 * - m = # of list 2
 *
 * ⏱️ Time: O(min(n, m)) - 🚀 Space: O(1)
 */
// const mergeLists = (head1, head2) => {
//   const dummyHead = new Node(null);
//   // maintain tail point
//   let tail = dummyHead;

//   let current1 = head1;
//   let current2 = head2;

//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       tail.next = current1;
//       current1 = current1.next;
//     } else {
//       tail.next = current2;
//       current2 = current2.next;
//     }
//     tail = tail.next;
//   }

//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;

//   return dummyHead.next;
// };
