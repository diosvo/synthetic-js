function mySolution(s) {
  let num = 0;
  let char = 1;
  let result = '';

  const array = s.match(/\d+|\D+/g);

  while (char < array.length) {
    result += array.at(char).repeat(array.at(num));
    num += 2;
    char += 2;
  }

  return result;
}

/**
 * ⏱️ Time: O(n*m) - 🚀 Space: O(n*m)
 * n - number of groups
 * m - max num found in any group
 */
function bruteForce(s) {
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  let result = [];

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));

      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }

      j++;
      i = j;
    }
  }

  return result.join('');
}

function uncompress(s) {
  return mySolution(s);
}

uncompress('2c3a1t'); // -> 'ccaaat'

// 2c3a1t
// i
// j
// --- Step 2
//  j - not a number → loop the total number of times
//  i - reset to the next character after the number
