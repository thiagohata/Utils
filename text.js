/**
 * capitalizes the first letter of a string
 * capitalize('fooBar'); // 'FooBar'
 * @param {String} param0
 */

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

/**
 * capitalizes the first letter of every word in a given string
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 * @param {String} str
 */

export const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * Turns the first letter of a string into lowercase.
 * decapitalize('FooBar'); // 'fooBar'
 * @param {String} param0
 */

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('');

/**
 * check whether a particular string is an anagram with another string.
 * isAnagram('iceman', 'cinema'); // true
 * @param {String} str1
 * @param {String} str2
 */

export const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

/**
 * used to reverse a string
 * reverseString('foobar'); // 'raboof'
 * @param {String} str
 */
export const reverseString = str => [...str].reverse().join('');

/**
 * serialize a cookie name-value pair into a Set-Cookie header string
 *  serializeCookie('foo', 'bar'); // 'foo=bar'
 * @param {String} name
 * @param {String} val
 */
export const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

/**
 * used to alphabetically sort the characters in a string.
 * sortCharactersInString('cabbage'); // 'aabbceg'
 * @param {String} str
 */
export const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');

/**
 * Remove HTML/XML tags from a string.
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 * @param {String} str
 */

export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

/**
 * converts a string into an array of words
 * words('I love javaScript!!'); // ["I", "love", "javaScript"]
 * @param {String} str
 * @param {Regeex} pattern
 */

export const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);
