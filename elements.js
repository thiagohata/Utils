/**
 *  checks whether the parent element contains the child
 * elementContains(document.querySelector('head'), document.querySelector('title')); // true
 * @param {Element} parent
 * @param {Element} child
 */
export const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

/**
 * to get the value of a CSS rule for a particular element
 * getStyle(document.querySelector('p'), 'font-size'); // '16px'
 * @param {element} el
 * @param {string} ruleName
 */

export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

/**
 * checks whether an element has a particular class
 * hasClass(document.querySelector('p.special'), 'special'); // true
 * @param {element} el
 * @param {String} className
 */

export const hasClass = (el, className) => el.classList.contains(className);

/**
 *  used to hide all elements specified
 * hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
 * @param  {element} el
 */

export const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

/**
 *  show all the elements specified
 * show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
 * @param  {element} el
 */
export const show = (...el) => [...el].forEach(e => (e.style.display = ''));

/**
 * to insert an HTML string after the end of a particular element.
 * insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
 * @param {element} el
 * @param {html} htmlString
 */

export const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML('afterend', htmlString);

/**
 * used to insert an HTML string before a particular element.
 * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
 * @param {element} el
 * @param {html} htmlString
 */

export const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML('beforebegin', htmlString);

/**
 * et the value of a CSS rule for a particular element.
 * setStyle(document.querySelector('p'), 'font-size', '20px');
 * @param {element} el
 * @param {string} ruleName
 * @param {string} val
 */
export const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

/**
 * used to smoothly scroll the element on which it is called into the visible area of the browser window
 * smoothScroll('#fooBar');
 * @param {Element} element
 */

export const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

/**
 * used to toggle a class for an element
 * toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
 * @param {Element} el
 * @param {String} className
 */
export const toggleClass = (el, className) => el.classList.toggle(className);
