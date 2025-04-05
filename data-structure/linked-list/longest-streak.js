/** 💡
 * 1. Track 3 variables: max_streak, current_streak, and prev_value.
 * 2. Compare:
 *  - current = prev_value -> current_streak++
 *  - current != prev_value -> current_streak = 1
 * 3. current_streak > max_streak -> max_streak = current_streak
 * 4. Return max_streak.
 */

/** 🔁 Iterative
 * - n = # of list
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {number} The length of the longest streak of consecutive values in the linked list.
 */
const longestStreak = (head) => {
  let current = head;
  let prev_value = null;
  let max_streak = 0;
  let current_streak = 0;

  while (current !== null) {
    if (current.val === prev_value) {
      current_streak++;
    } else {
      // Reset
      current_streak = 1;
    }

    if (current_streak > max_streak) {
      max_streak = current_streak;
    }

    prev_value = current.val;
    current = current.next;
  }

  return max_streak;
};

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
longestStreak(a); // 3
