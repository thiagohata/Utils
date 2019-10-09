/**
 *  gets the day of the year from a Date object
 *  dayOfYear(new Date()); // 272
 * @param {Date} date
 */
export const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

/**
 * Used to get the time from a Date object as a string
 * getColonTimeFromDate(new Date()); // "08:38:00"
 * @param {Date} date
 */

export const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

/**
 * Used to find the difference in days between two dates
 * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
 * @param {Date} dateInitial
 * @param {Date} dateFinal
 */

export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

/**
 * used to check whether a date is after another date
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
 * @param {Date} dateA
 * @param {Date} dateB
 */

export const isAfterDate = (dateA, dateB) => dateA > dateB;

/**
 * check whether a date is before another date
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
 * @param {Date} dateA
 * @param {Date} dateB
 */
export const isBeforeDate = (dateA, dateB) => dateA < dateB;

/**
 * check whether two dates are equal
 * isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
 * @param {date} dateA
 * @param {date} dateB
 */
export const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();

/**
   *  get the latest date
   * const array = [
      new Date(2017, 4, 13),
      new Date(2018, 2, 12),
      new Date(2016, 0, 10),
      new Date(2016, 0, 9)
    ];
   * maxDate(array); // 2018-03-11T22:00:00.000Z 
   * @param  {Array} dates 
   */

export const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

/**
 * get the earliest date
 * const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
  ];
 * minDate(array); // 2016-01-08T22:00:00.000Z
 * @param  {Array} dates
 */

export const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

/**
 * Get a string representation of tomorrow’s date
 * tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
 */

const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
