const parentheticalPossibilities = (s) => {
  if (s === '') return [''];

  const { remaining, chars } = getOptions(s);
  const suffixes = parentheticalPossibilities(remaining);
  const possibilities = [];

  for (const char of chars) {
    for (const suffix of suffixes) {
      possibilities.push(char + suffix);
    }
  }

  return possibilities;
};

const getOptions = (s) => {
  if (s[0] === '(') {
    const endIdx = s.indexOf(')');
    const remaining = s.slice(endIdx + 1);
    const chars = s.slice(1, endIdx).split('');
    return { remaining, chars };
  } else {
    const remaining = s.slice(1);
    const chars = [s[0]];
    return { remaining, chars };
  }
};

parentheticalPossibilities(''); // -> ['']
parentheticalPossibilities('taco'); // -> ['taco']
parentheticalPossibilities('x(mn)yz'); // -> [ 'xmyz', 'xnyz' ]
parentheticalPossibilities('(qr)ab(stu)c'); // ->
// [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
parentheticalPossibilities('(etc)(blvd)(cat)'); // ->
// [
//  'ebc', 'eba', 'ebt', 'elc', 'ela',
//  'elt', 'evc', 'eva', 'evt', 'edc',
//  'eda', 'edt', 'tbc', 'tba', 'tbt',
//  'tlc', 'tla', 'tlt', 'tvc', 'tva',
//  'tvt', 'tdc', 'tda', 'tdt', 'cbc',
//  'cba', 'cbt', 'clc', 'cla', 'clt',
//  'cvc', 'cva', 'cvt', 'cdc', 'cda',
//  'cdt'
// ]
