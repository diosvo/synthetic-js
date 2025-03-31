/**
 * - n = length of array a
 * - m = length of array b
 *
 * ⏱️ Time: O(n+m) - 🚀 Space: O(n)
 *
 * Too slow, we need to cutdown the time complexity
 */
const exclusive = (a, b) => {
  const diff = [];
  const setA = new Set(a);

  b.forEach((num) => {
    if (setA.has(num)) {
      setA.delete(num);
    } else {
      diff.push(num);
    }
  });

  return [...setA, ...diff];
};

exclusive([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [4,1,3,9,10]
exclusive([2, 4, 6], [4, 2]); // -> [6]

//  81ms
const a = [];
const b = [];
for (let i = 0; i < 60000; i += 1) {
  a.push(i);
  b.push(i);
}
exclusive(a, b); // -> [ ]
