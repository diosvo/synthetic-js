/**
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns {string} - Returns the time in 24-hour format
 */
function timeConversion(s) {
  // Extract the AM/PM indicator
  const period = s.slice(-2);

  const [hour, minutes, second] = s.slice(0, -2).split(':');
  let h = Number(hour);

  if (period === 'AM') {
    if (h === 12) h = 0;
  } else {
    if (h !== 12) h += 12;
  }

  // Format the hour to ensure two digits (e.g., 01 instead of 1)
  return `${h.toString().padStart(2, 0)}:${minutes}:${second}`;
}

timeConversion('12:01:00PM'); // -> '12:01:00'
timeConversion('12:01:00AM'); // -> '00:01:00'
timeConversion('07:05:45PM'); // -> '19:05:45'
