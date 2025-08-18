/**
 * @param arr {Array<number>} - The cost of each item ordered
 * @param k {number} - The zero-based index of the item Anna doesn't eat
 * @param b {number} - The amount of money that Anna contributed to the bill
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns Did not overcharge, print "Bon Appetit" on a new line; otherwise, print the difference
 */
function bonAppetit(bill, k, b) {
  // The actual bill of Anna's share
  const billActual =
    bill.reduce((acc, curr, index) => {
      if (index === k) return acc;
      const total = acc + curr;
      return total;
    }, 0) / 2;
  const overCharged = b - billActual;

  return overCharged > 0 ? overCharged : 'Bon Appetit';
}

bonAppetit([3, 10, 2, 9], 1, 12); // -> 5
bonAppetit([3, 10, 2, 9], 1, 7); // -> Bon Appetit
