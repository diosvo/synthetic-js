/**
 * `n` = length of input string
 * `k` = maximum repetition factor
 *
 * ⏱️ Time: O(n x k) - 🚀 Space: O(n x k)
 *
 * @description `n{subString}`, where the subString within braces should be repeated n times.
 * @returns {string} Return the decompressed string.
 */
function decompressBraces(str) {
  const stack = [];

  for (const char of str) {
    if (/^\d+$/.test(char)) {
      stack.push(Number(char));
    } else {
      if (char === '}') {
        // Popping subrouting
        let segment = '';

        // Top of the stack
        while (typeof stack[stack.length - 1] !== 'number') {
          const popped = stack.pop();
          segment = popped + segment;
        }

        const num = stack.pop();
        stack.push(segment.repeat(num));
      } else if (char !== '{') {
        // Don't do anything with '{' bracket
        // Alpha character
        stack.push(char);
      }
    }
  }

  return stack.join('');
}

decompressBraces('2{q}3{tu}v'); // -> qqtututuv
decompressBraces('ch3{ao}'); // -> chaoaoao
decompressBraces('2{y3{o}}s'); // -> yoooyooos
decompressBraces('z3{a2{xy}b}'); // -> zaxyxybaxyxybaxyxyb
decompressBraces('2{3{r4{e}r}io}'); // -> reeeerreeeerreeeerioreeeerreeeerreeeerio
decompressBraces('go3{spinn2{ing}s}'); // -> gospinningingsspinningingsspinningings
decompressBraces('2{l2{if}azu}l'); // -> lififazulififazul
decompressBraces('3{al4{ec}2{icia}}'); // -> alececececiciaiciaalececececiciaiciaalececececiciaicia
