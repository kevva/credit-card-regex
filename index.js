'use strict';

var americanExpress = '(?:3[47][0-9]{13})';
var dinersClub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})';
var discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))';
var jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})';
var maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})';
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
		dinersClub,
		discover,
		jcb,
		maestro,
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
 * Diners Club
 *
 * @api public
 */

module.exports.dinersClub = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + dinersClub + '\\1', 'g');
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
 * JCB
 *
 * @api public
 */

module.exports.jcb = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + jcb + '\\1', 'g');
};

/**
 * Maestro
 *
 * @api public
 */

module.exports.maestro = function () {
	return new RegExp('(?:^|\\s)?(["\'])?' + maestro + '\\1', 'g');
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
