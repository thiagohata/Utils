/**
 * generate a random hexadecimal color code
 * randomHexColorCode(); // "#e34155"
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

/**
 * used to generate an array with n random integers in a specified range.
 * randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
 * @param {Number} min
 * @param {Number} max
 * @param {Number} n
 */

export const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

/**
 * generate a random integer in a specified range
 * randomIntegerInRange(0, 5); // 3
 * @param {Number} min
 * @param {Number} max
 */
export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * return a random number in a specified range
 * randomNumberInRange(2, 10); // 6.0211363285087005
 * @param {Number} min
 * @param {Number} max
 */

export const randomNumberInRange = (min, max) =>
  Math.random() * (max - min) + min;
