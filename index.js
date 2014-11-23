'use strict';

var americanExpress = '(?:3[47][0-9]{13})';
var dinersClub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})';
var discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))';
var jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})';
var maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})';
var mastercard = '(?:5[1-5][0-9]{14})';
var visa = '(?:4[0-9]{12})(?:[0-9]{3})?';

function generate(pattern) {
	return function () {
		return new RegExp('(?:^|\\s)?(["\'])?' + pattern + '\\1', 'g');
	}
};

/**
 * Regular expression for matching credit card numbers
 *
 * @api public
 */

module.exports = generate([
	americanExpress,
	dinersClub,
	discover,
	jcb,
	maestro,
	mastercard,
	visa
].join('|'));

/**
 * American Express
 *
 * @api public
 */

module.exports.americanExpress = generate(americanExpress);

/**
 * Diners Club
 *
 * @api public
 */

module.exports.dinersClub = generate(dinersClub);

/**
 * Discover
 *
 * @api public
 */

module.exports.discover = generate(discover);

/**
 * JCB
 *
 * @api public
 */

module.exports.jcb = generate(jcb);

/**
 * Maestro
 *
 * @api public
 */

module.exports.maestro = generate(maestro);

/**
 * Mastercard
 *
 * @api public
 */

module.exports.mastercard = generate(mastercard);

/**
 * VISA
 *
 * @api public
 */

module.exports.visa = generate(visa);
