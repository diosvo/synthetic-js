function equalizeArray(arr) {
  const map = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const maxLen = Math.max(...Object.values(map));

  return arr.length - maxLen;
}

equalizeArray([1, 2, 2, 3]); // -> 2
equalizeArray([3, 3, 2, 1, 3]); // -> 2
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]); // -> 4
