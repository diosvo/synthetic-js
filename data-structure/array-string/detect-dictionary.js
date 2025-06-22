import lexicalOrder from './lexical-order';

/**
 * n = # of words in the dictionary
 * k = max length of a word in the dictionary
 *
 * ⏱️ Time: O(nk) - 🚀 Space: O(1)
 *
 * @returns {boolean} Returns true if the dictionary is sorted in the given alphabet order
 */
function detectDictionary(dictionary, alphabet) {
  for (let i = 0; i < dictionary.length - 1; i++) {
    // Iterate ✌🏻 pairwise through the dictionary
    const current = dictionary[i];
    const next = dictionary[i + 1];

    if (!lexicalOrder(current, next, alphabet)) return false;
  }

  return true;
}

const alphabet = 'ghzstijbacdopnfklmeqrxyuvw';
detectDictionary(['zoo', 'tick', 'tack', 'door'], alphabet); // -> true
detectDictionary(['zoo', 'tack', 'tick', 'door'], alphabet); // -> false
