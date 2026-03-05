/**
 * ⏱️ Time: - 🚀 Space:
 *
 * @returns All the possible orders by which the people can line up.
 */
const liningUp = (people, capacity) => {
  // Impossible to lineup more people than available
  if (capacity > people.length) return [];
  // No more people to line up → 2D Array inside means "lining up no one"
  if (capacity === 0) return [[]];

  const allLines = [];
  const currentPerson = people[0];
  const remainingPeople = people.slice(1);

  // Include the first person
  for (const line of liningUp(remainingPeople, capacity - 1)) {
    for (let i = 0; i <= line.length; i += 1) {
      allLines.push([
        ...line.slice(0, i), // front
        currentPerson, // middle
        ...line.slice(i), // end
      ]);
    }
  }

  // Exclude the first person
  for (const line of liningUp(remainingPeople, capacity)) {
    allLines.push(line);
  }

  return allLines;
};

liningUp(['anj', 'aud'], 1); // ->
// [
//   [ 'anj' ],
//   [ 'aud' ]
// ]
liningUp(['anj', 'aud'], 2); // ->
// [
//   [ 'anj', 'aud' ],
//   [ 'aud', 'anj' ]
// ]
liningUp(['autumn', 'anj', 'aud'], 2); // ->
// [
//   [ 'autumn', 'anj' ],
//   [ 'anj', 'autumn' ],
//   [ 'autumn', 'aud' ],
//   [ 'aud', 'autumn' ],
//   [ 'anj', 'aud' ],
//   [ 'aud', 'anj' ]
// ]
liningUp(['jason', 'jen', 'cody', 'vicky'], 3); // ->
// [
//   [ 'jason', 'jen', 'cody' ],
//   [ 'jen', 'jason', 'cody' ],
//   [ 'jen', 'cody', 'jason' ],
//   [ 'jason', 'cody', 'jen' ],
//   [ 'cody', 'jason', 'jen' ],
//   [ 'cody', 'jen', 'jason' ],
//   [ 'jason', 'jen', 'vicky' ],
//   [ 'jen', 'jason', 'vicky' ],
//   [ 'jen', 'vicky', 'jason' ],
//   [ 'jason', 'vicky', 'jen' ],
//   [ 'vicky', 'jason', 'jen' ],
//   [ 'vicky', 'jen', 'jason' ],
//   [ 'jason', 'cody', 'vicky' ],
//   [ 'cody', 'jason', 'vicky' ],
//   [ 'cody', 'vicky', 'jason' ],
//   [ 'jason', 'vicky', 'cody' ],
//   [ 'vicky', 'jason', 'cody' ],
//   [ 'vicky', 'cody', 'jason' ],
//   [ 'jen', 'cody', 'vicky' ],
//   [ 'cody', 'jen', 'vicky' ],
//   [ 'cody', 'vicky', 'jen' ],
//   [ 'jen', 'vicky', 'cody' ],
//   [ 'vicky', 'jen', 'cody' ],
//   [ 'vicky', 'cody', 'jen' ]
// ]
