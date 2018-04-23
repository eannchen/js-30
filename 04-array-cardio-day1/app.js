/**
  * Array.prototype.filter()
  * Filter the list of inventors for those who were born in the 1500's
*/
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

/**
 * Array.prototype.map()
 * Give us an array of the inventors' first and last names
*/
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

/**
 * Array.prototype.sort()
 * Sort the inventors by birthday, oldest to youngest
*/
/**
 * 排序 > 0，排在後
 * 排序 < 0，排在前
 * 排序 = 0，不改變順序
 */
const ordered = inventors.sort((a, b) => a.year - b.year);
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

/**
 * Array.prototype.reduce()
 * How many years did all the inventors live?
*/
const years = inventors.reduce((sum, inventor) => sum + (inventor.passed - inventor.year), 0);

/**
 * 習題：
 * Sort the inventors by years lived
 */
const oldest = inventors.sort((a, b) => {
  const last = a.year - b.passed;
  const next = b.year - b.passed;
  return last > next ? -1 : 1;
});

/**
 * 習題：
 * create a list of Boulevards in Paris that contain 'de' anywhere in the name
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 */
// const nodesA = document.querySelectorAll('.mw-category a');
// // const arrA = Array.from(nodesA);
// const arrA = [...nodesA];
// const de = arrA
//   .map(a => a.text)
//   .filter(name => name.includes('de'));

/**
 * 習題：
 * Sort the people alphabetically by last name
 */
const alpha = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(', ');
  const [bFirst, bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});

/**
 * 習題：
 * Sum up the instances of each of these
 */
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});
