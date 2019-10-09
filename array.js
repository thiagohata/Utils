/**
 * checks whether all elements of the array are equal.
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 * @param {array} arr
 */

export const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * checks whether two numbers are approximately equal to each other, with a small difference
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 * @param {Number} v1
 * @param {Number} v2
 * @param {Number} epsilon
 */

export const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

/**
 * converts the elements of an array into <li> tags and appends them to the list of the given ID.
 * arrayToHtmlList(['item 1', 'item 2'], 'myListID');
 * @param {array} arr
 * @param {element} listID
 */

export const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();

/**
 * Converts a non-array value into array
 * castArray('foo'); // ['foo']
 * @param {Any} val
 */
export const castArray = val => (Array.isArray(val) ? val : [val]);

/**
 *  removes false values from an array
 * compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
 * @param {Array} arr
 */
export const compact = arr => arr.filter(Boolean);

/**
 * Counts the occurrences of a value in an array
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 * @param {Array} arr
 * @param {Any} val
 */
export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * flattens an array recursively
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 * @param {Array} arr
 */
export const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 * splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise
 * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
 *
 * @param {array} arr
 * @param {Array} filter
 */

export const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    []
  ]);

/**
 * Finds the difference between two arrays
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 * @param {Array} a
 * @param {Array} b
 */
export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

/**
 *  gets a number as input and returns an array of its digits
 * digitize(431); // [4, 3, 1]
 * @param {Number} n
 */

export const digitize = n => [...`${n}`].map(i => parseInt(i));

/**
 * returns a new array with n elements removed from the left.
 * drop([1, 2, 3]); // [2,3]
 * drop([1, 2, 3], 2); // [3]
 * @param {Array} arr
 * @param {Number} n
 */
export const drop = (arr, n = 1) => arr.slice(n);

/**
 * returns a new array with n elements removed from the right
 * dropRight([1, 2, 3]); // [1,2]
 * dropRight([1, 2, 3], 2); // [1]
 * @param {Array} arr
 * @param {Number} n
 */
export const dropRight = (arr, n = 1) => arr.slice(0, -n);

/**
 * removes elements from the right side of an array until the passed function returns true
 * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
 * @param {Array} arr
 * @param {Function} func
 */
export const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

/**
 * removes elements from an array until the passed function returns true.
 * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
 * @param {Array} arr
 * @param {Function} func
 */
export const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

/**
 * removes duplicate values in an array
 * filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
 * @param {Array} arr
 */
export const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

/**
 * flattens an array up to a specified depth using recursion
 * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
 * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
 * @param {Array} arr
 * @param {Number} depth
 */
export const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

/**
 * get all indexes of a value in an array, which returns an empty array, in case this value is not included in it
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
 * indexOfAll([1, 2, 3], 4); // []
 * @param {Array} arr
 * @param {Number} val
 */
export const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

/**
 * get an array with elements that are included in two other arrays
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 * @param {Array} a
 * @param {Array} b
 */

export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * returns the last element of an array
 * last([1, 2, 3]); // 3
 * @param {Array} arr
 */

export const last = arr => arr[arr.length - 1];

/**
 * order the elements of an array randomly using the Fisher-Yates algorithm
 * const foo = [1, 2, 3];
 * shuffle(foo); // [2, 3, 1]
 * @param {Array} param0
 */

export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

/**
 * return an array of elements that appear in two arrays.
 * similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
 * @param {Array} arr
 * @param {Array} values
 */
export const similarity = (arr, values) => arr.filter(v => values.includes(v));

/**
 * used to find the union of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat
 * union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
 * @param {Array} a
 * @param {Array} b
 */

export const union = (a, b) => Array.from(new Set([...a, ...b]));
