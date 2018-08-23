const isAdult = R.any(p => new Date().getFullYear() - p.year >= 19, people);

const allAdults = R.all(p => new Date().getFullYear() - p.year >= 19, people);

const comment = R.find(comment => comment.id === 823423, comments);

const index = R.findIndex(comment => comment.id === 823423, comments);

const newComments = [
  ...R.slice(0, index, comments),
  ...R.slice(index + 1, Infinity, comments)
];
