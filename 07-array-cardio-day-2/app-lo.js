/*
lodash/some.js

function some(array, predicate) {
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true
    }
  }
  return false
}
*/
const isAdult = _.some(people, p => new Date().getFullYear() - p.year >= 19);

/*
lodash/every.js

function every(array, predicate) {
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false
    }
  }
  return true
}
*/
const allAdults = _.every(people, p => new Date().getFullYear() - p.year >= 19);

const comment = _.find(comments, comment => comment.id === 823423);

const index = _.findIndex(comments, comment => comment.id === 823423);

const newComments = [
  ..._.slice(comments, 0, index),
  ..._.slice(comments, index + 1)
];
