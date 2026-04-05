/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const tokenReplace = (s, tokens) => {
  let output = [];

  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i += 1;
      j = i + 1;
    } else if (s[j] !== '$') {
      j += 1;
    } else {
      const key = s.slice(i, j + 1);
      output.push(tokens[key]);
      i = j + 1;
      j = i + 1;
    }
  }

  return output.join('');
};

tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', {
  $LOCATION$: 'park',
  $ANIMAL$: 'dog',
}); // -> 'Walk the dog in the park!'
tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', {
  $ADJECTIVE$: 'quick',
  $VERB$: 'hopped',
  $DIRECTION$: 'North',
}); // -> 'the quick fox hopped quickly Northward'
tokenReplace('his greeting is always $greeting$.', {
  $greeting$: 'hey programmer',
}); // -> 'his greeting is always hey programmer.'
tokenReplace('$A$$B$$C$, oh my.', {
  $A$: 'lions',
  $B$: 'tigers',
  $C$: 'bears',
}); // -> 'lionstigersbears, oh my.'
tokenReplace('$B$', {
  $A$: 'lions',
  $B$: 'tigers',
  $C$: 'bears',
}); // -> 'tigers'
tokenReplace('$first$second$third$', {
  $second$: 'beta',
  $first$: 'alpha',
  $third$: 'gamma',
}); // -> 'alphasecondgamma'
