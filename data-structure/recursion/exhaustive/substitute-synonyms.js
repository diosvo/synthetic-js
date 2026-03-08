const substituteSynonyms = (sentence, synonyms) => {
  const words = sentence.split(' ');
  const arrays = generate(words, synonyms);
  return arrays.map((subarray) => subarray.join(' '));
};

const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];

  const firstWord = words[0];
  const remainingWords = words.slice(1);
  const subarrays = generate(remainingWords, synonyms);
  if (firstWord in synonyms) {
    const result = [];
    for (let synonym of synonyms[firstWord]) {
      result.push(...subarrays.map((subarray) => [synonym, ...subarray]));
    }
    return result;
  } else {
    return subarrays.map((subarray) => [firstWord, ...subarray]);
  }
};

substituteSynonyms('follow the yellow brick road', {
  follow: ['chase', 'pursue'],
  yellow: ['gold', 'amber', 'lemon'],
}); // ->
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]
substituteSynonyms("I think it's gonna be a long long time", {
  think: ['believe', 'reckon'],
  long: ['lengthy', 'prolonged'],
}); // ->
// [
//   "I believe it's gonna be a lengthy lengthy time",
//   "I believe it's gonna be a lengthy prolonged time",
//   "I believe it's gonna be a prolonged lengthy time",
//   "I believe it's gonna be a prolonged prolonged time",
//   "I reckon it's gonna be a lengthy lengthy time",
//   "I reckon it's gonna be a lengthy prolonged time",
//   "I reckon it's gonna be a prolonged lengthy time",
//   "I reckon it's gonna be a prolonged prolonged time"
// ]

substituteSynonyms('palms sweaty knees weak arms heavy', {
  palms: ['hands', 'fists'],
  heavy: ['weighty', 'hefty', 'burdensome'],
  weak: ['fragile', 'feeble', 'frail', 'sickly'],
}); // ->
// [
//   'hands sweaty knees fragile arms weighty',
//   'hands sweaty knees fragile arms hefty',
//   'hands sweaty knees fragile arms burdensome',
//   'hands sweaty knees feeble arms weighty',
//   'hands sweaty knees feeble arms hefty',
//   'hands sweaty knees feeble arms burdensome',
//   'hands sweaty knees frail arms weighty',
//   'hands sweaty knees frail arms hefty',
//   'hands sweaty knees frail arms burdensome',
//   'hands sweaty knees sickly arms weighty',
//   'hands sweaty knees sickly arms hefty',
//   'hands sweaty knees sickly arms burdensome',
//   'fists sweaty knees fragile arms weighty',
//   'fists sweaty knees fragile arms hefty',
//   'fists sweaty knees fragile arms burdensome',
//   'fists sweaty knees feeble arms weighty',
//   'fists sweaty knees feeble arms hefty',
//   'fists sweaty knees feeble arms burdensome',
//   'fists sweaty knees frail arms weighty',
//   'fists sweaty knees frail arms hefty',
//   'fists sweaty knees frail arms burdensome',
//   'fists sweaty knees sickly arms weighty',
//   'fists sweaty knees sickly arms hefty',
//   'fists sweaty knees sickly arms burdensome'
// ]
