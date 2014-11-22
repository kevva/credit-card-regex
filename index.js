'use strict';

var americanExpress = '(?:3[47][0-9]{13})';
var discover = '(?:6)(?:011|5[0-9]{2})(?:[0-9]{12})';
var mastercard = '(?:5[1-5][0-9]{14})';
var visa = '(?:4[0-9]{12})(?:[0-9]{3})?';

/**
 * Regular expression for matching credit card numbers
 *
 * @api public
 */

module.exports = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + [
		americanExpress,
		discover,
		mastercard,
		visa
	].join('|') + '\\1', 'g');
};

/**
 * American Express
 *
 * @api public
 */

module.exports.americanExpress = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + americanExpress + '\\1', 'g');
};

/**
 * Discover
 *
 * @api public
 */

module.exports.discover = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + discover + '\\1', 'g');
};

/**
 * Mastercard
 *
 * @api public
 */

module.exports.mastercard = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + mastercard + '\\1', 'g');
};

/**
 * VISA
 *
 * @api public
 */

module.exports.visa = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + visa + '\\1', 'g');
};
