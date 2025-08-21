/**
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns The date of the Day of the Programmer in the format "dd.mm.yyyy"
 *          (the 256th day of the year)
 */
function dayOfProgrammer(year) {
  const programmerDay = 256;
  // [31, 31, 30, 31, 30, 31, 31] // Jan - Aug
  let days = 215; // Total days from ^  / + push Feb later

  // Special case for the transition year
  if (year === 1918) {
    return '26.09.1918';
  } else if (year < 1918) {
    // 1700-1917: Julian
    if (year % 4 === 0) {
      days += 29;
    } else {
      days += 28;
    }
  } else {
    // 1919-2700: Gregorian
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      days += 29;
    } else {
      days += 28;
    }
  }

  return `${programmerDay - days}.09.${year}`;
}

dayOfProgrammer(2017); // -> 13.09.2017
dayOfProgrammer(2016); // -> 12.09.2016
dayOfProgrammer(1800); // -> 12.09.1800
