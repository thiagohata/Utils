/**
 * delays the execution of a function until the current call stack is cleared
 * defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
 * @param {Function} fn
 * @param  {...any} args
 */

export const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
