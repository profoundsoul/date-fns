import startOfHour from '../startOfHour/index.js'

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same hour
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
export default function isSameHour (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfHour = startOfHour(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}
