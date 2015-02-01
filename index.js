'use strict';

var americanExpress = '(?:3[47][0-9]{13})';
var dinersClub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})';
var discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))';
var jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})';
var maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})';
var mastercard = '(?:5[1-5][0-9]{14})';
var visa = '(?:4[0-9]{12})(?:[0-9]{3})?';

function generate(pattern) {
	return function (opts) {
		opts = opts || {};
		return opts.exact ? new RegExp('(?:^' + pattern + '$)') :
							new RegExp('(?:^|\\s)?(["\'])?' + pattern + '\\1', 'g');
	};
}

module.exports = generate([
	americanExpress,
	dinersClub,
	discover,
	jcb,
	maestro,
	mastercard,
	visa
].join('|'));

module.exports.americanExpress = generate(americanExpress);
module.exports.dinersClub = generate(dinersClub);
module.exports.discover = generate(discover);
module.exports.jcb = generate(jcb);
module.exports.maestro = generate(maestro);
module.exports.mastercard = generate(mastercard);
module.exports.visa = generate(visa);
