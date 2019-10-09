/**
 * used to check if a value is of a particular type
 * is(Array, [1]); // true
 * is(ArrayBuffer, new ArrayBuffer()); // true
 * is(Map, new Map()); // true
 * is(Set, new Set()); // true
 * is(RegExp, /./g); // true
 * is(WeakMap, new WeakMap()); // true
 * is(WeakSet, new WeakSet()); // true
 * is(String, ''); // true
 * is(Number, 1); // true
 * is(Boolean, true); // true
 * @param {Any} type
 * @param {Any} val
 */

export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type;

/**
 *  check whether an argument is a boolean
 * isBoolean(null); // false
 * isBoolean(false); // true
 * @param {any} val
 */
export const isBoolean = val => typeof val === 'boolean';

/**
 *  used to determine whether the current runtime environment is a browser
 * isBrowser(); // true (browser)
 * isBrowser(); // false (Node)
 */

export const isBrowser = () =>
  ![typeof window, typeof document].includes('undefined');

/**
 * used to determine whether the browser tab is focused
 * isBrowserTabFocused(); // true
 */

export const isBrowserTabFocused = () => !document.hidden;

/**
 * used to determine whether a string is lower case
 * isLowerCase('abc'); // true
 * @param {String} str
 */

export const isLowerCase = str => str === str.toLowerCase();

/**
 * check whether a value is null or undefined.
 * isNil(null); // true
 * @param {any} val
 */

export const isNil = val => val === undefined || val === null;

/**
 * check whether a value is null
 * isNull(null); // true
 * @param {any} val
 */

export const isNull = val => val === null;

/**
 * check whether a provided value is a number
 * isNumber('1'); // false
 * isNumber(1); // true
 * @param {any} n
 */
export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

/**
 *  an object, then an object type that corresponds to the given value will be returned. Otherwise, a new object will be returned
 * isObject([1, 2, 3, 4]); // true
 * isObject({ a: 1 }); // true
 * @param {any} obj
 */
export const isObject = obj => obj === Object(obj);

/**
 * check whether an argument is a string
 * isString('10'); // true
 * @param {any} val
 */
export const isString = val => typeof val === 'string';

/**
 * check whether a value is undefined
 * isUndefined(undefined); // true
 * @param {*} val
 */

export const isUndefined = val => val === undefined;

/**
 * check whether a string is upper case
 * isUpperCase('ABC'); // true
 * isLowerCase('aB4'); // false
 * @param {string} str
 */

export const isUpperCase = str => str === str.toUpperCase();

/**
 * check whether a string is a valid JSON
 * isValidJSON('{"name":"Adam","age":20}'); // true
 * isValidJSON('{"name":"Adam",age:"20"}'); // false
 * @param {string} str
 */

export const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
