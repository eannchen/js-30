/**
  * R.filter
  * Filter the list of inventors for those who were born in the 1500's
*/
const fifteen = R.filter(inventor => inventor.year >= 1500 && inventor.year < 1600, inventors);

/**
 * R.map
 * Give us an array of the inventors' first and last names
*/
const fullNames = R.map(inventor => `${inventor.first} ${inventor.last}`, inventors);


/**
 * R.sort()
 * R.sortBy()
 * Sort the inventors by birthday, oldest to youngest
*/
const ordered = R.sort((a, b) => a.year > b.year ? 1 : -1, inventors);
// const ordered = R.sortBy(inventor => inventor.year, inventors);

/**
 * R.reduce()
 * How many years did all the inventors live?
*/
const years = R.reduce((sum, inventor) => sum + (inventor.passed - inventor.year), 0, inventors);

/**
 * 習題：
 * Sort the inventors by years lived
 */
// const oldest = R.sort((a, b) => {
//   const last = a.year - b.passed;
//   const next = b.year - b.passed;
//   return last > next ? -1 : 1;
// }, inventors);
const oldest = R.reverse(R.sortBy(inventor => {
  return inventor.passed - inventor.year
})(inventors));


/**
 * 習題：
 * create a list of Boulevards in Paris that contain 'de' anywhere in the name
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 */
// const nodesA = document.querySelectorAll('.mw-category a');
// const arrA = [...nodesA];
// const de = R.filter(name => name.includes('de'), R.map(a => a.text, arrA));


/**
 * 習題：
 * Sort the people alphabetically by last name
 */
const alpha = R.sortBy(p => {
  const [aFirst, aLast] = R.split(', ', p);
  return aLast;
}, people)

/**
 * 習題：
 * Sum up the instances of each of these
 */
const transportation = R.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {}, data);
