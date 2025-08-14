/**
 * @description Take grades and rounds them according to specific rules:
 * - If the grade is less than 38, it remains unchanged.
 * - If it is higher, it rounds up to the nearest multiple of 5 if the difference is less than 3.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number[]} - Returns an array of rounded grades
 */
function gradingStudents(grades) {
  const result = [];

  for (const grade of grades) {
    const divider = Math.floor(grade / 5) + 1;
    const nextValue = divider * 5;

    if (grade >= 38 && nextValue - grade < 3) {
      result.push(nextValue);
    } else {
      result.push(grade);
    }
  }

  return result;
}

gradingStudents([73, 67, 38, 33]); // -> [75, 67, 40, 33]
