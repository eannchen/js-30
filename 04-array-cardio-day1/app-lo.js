/**
  * _.filter()
  * Filter the list of inventors for those who were born in the 1500's
*/
const fifteen = _.filter(inventors, inventor => inventor.year >= 1500 && inventor.year < 1600);

/**
 * _.map()
 * Give us an array of the inventors' first and last names
*/
const fullNames = _.map(inventors, inventor => `${inventor.first} ${inventor.last}`);

/**
 * _.sortBy()
 * Sort the inventors by birthday, oldest to youngest
*/
const ordered = _.sortBy(inventors, (inventor) => inventor.year);

/**
 * _.reduce()
 * How many years did all the inventors live?
*/
const years = _.reduce(inventors, (sum, inventor) => sum + (inventor.passed - inventor.year), 0);

/**
 * 習題：
 * Sort the inventors by years lived
 */
const oldest = _.reverse(_.sortBy(inventors, inventor => {
  return inventor.passed - inventor.year
}));

/**
 * 習題：
 * create a list of Boulevards in Paris that contain 'de' anywhere in the name
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 */
// const nodesA = document.querySelectorAll('.mw-category a');
// const arrA = [...nodesA];
// const de = _.filter(_.map(arrA, a => a.text), name => name.includes('de'));


/**
 * 習題：
 * Sort the people alphabetically by last name
 */
const alpha = _.sortBy(people, p => {
  const [aFirst, aLast] = _.split(p, ', ');
  return aLast;
})

/**
 * 習題：
 * Sum up the instances of each of these
 */
const transportation = _.reduce(data, (obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});
