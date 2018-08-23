// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear();
const isAdult = people.some(p => currentYear - p.year >= 19);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(p => new Date().getFullYear() - p.year >= 19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

// comments.splice(index, 1);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
