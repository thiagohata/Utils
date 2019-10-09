/**
 * returns the average of two or more numerical values.
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * @param  {...any} nums
 */

export const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * Convert a value from degrees to radians.
 * degreesToRads(90.0); // ~1.5708
 * @param {Number} deg
 */

export const degreesToRads = deg => (deg * Math.PI) / 180.0;

/**
 * returns the n largest elements from a list.
 * maxN([1, 2, 3], 2); // [3,2]
 * maxN([1, 2, 3]); // [3]
 * @param {Array} arr
 * @param {Number} n
 */

export const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

/**
 * returns the n smallest elements from a list
 * minN([1, 2, 3]); // [1]
 * @param {Array} arr
 * @param {Number} n
 */

export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

/**
 * round a number to a specified number of digits
 * round(1.005, 2); // 1.01
 * @param {Number} n
 * @param {Number} decimals
 */

export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

/**
 * get a random number from an array
 * sample([3, 7, 9, 11]); // 9
 * @param {Array} arr
 */
export const sample = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * used to find the sum of two or more numbers or arrays
 * sum(1, 2, 3, 4); // 10
 * @param  {Array} arr
 */
export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

/**
 *  get an array with all the elements of an array except for the first one
 * tail([1, 2, 3]); // [2,3]
 * @param {Array} arr
 */
export const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

/**
 * get an array with n elements removed from the beginning.
 * take([1, 2, 3], 0); // []
 * take([1, 2, 3], 5); // [1, 2, 3]
 * @param {Array} arr
 * @param {Number} n
 */
export const take = (arr, n = 1) => arr.slice(0, n);

/**
 * get an array with n elements removed from the end.
 * takeRight([1, 2, 3], 2); // [ 2, 3 ]
 * @param {Array} arr
 * @param {Number} n
 */

export const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

export const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr
  }).format(n);
