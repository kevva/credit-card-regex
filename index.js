'use strict';
const americanExpress = '(?:3[47][0-9]{13})';
const dinersClub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})';
const discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))';
const jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})';
const maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})';
const mastercard = '(?:(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})';
const visa = '(?:4[0-9]{12})(?:[0-9]{3})?';

const generate = pattern => (opts = {}) => opts.exact ? new RegExp(`(?:^${pattern}$)`) : new RegExp(pattern, 'g');

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
