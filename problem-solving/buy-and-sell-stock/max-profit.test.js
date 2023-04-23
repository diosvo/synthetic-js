const maxProfit = require('./max-profit');

describe('maxProfit', () => {
  function run(message, prices, max_profit) {
    test(`Test case ${message}`, () => {
      expect(maxProfit(prices)).toEqual(max_profit);
    })
  }

  run('A', [5, 3, 7, 5, 10, 8, 4, 3], 7);
  run('B', [5, 8, 3, 11, 15, 4, 8], 12);
  run('C', [1, 7, 3, 9, 3, 7, 3], 8);
  run('D', [5, 4, 3, 2, 1], 0);
})