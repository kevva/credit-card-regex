'use strict';

var creditCardRegex = require('./');
var test = require('ava');

test('match credit card numbers', function (t) {
	var fixtures = [
		'375823991767494',
		'370016309239810',
		'342303586906724',
		'373186299218574',
		'344399284596278',
		'4073597954431887',
		'4716882701458331',
		'4716493726901568',
		'4485361188744892',
		'4716753805047041',
		'5441068611005540',
		'5477360025414799',
		'5162092764340592',
		'5400240954774946',
		'5288141359907569',
		'6011703727540414',
		'6011294289926423',
		'6011203331019848',
		'6011463009569272',
		'6011881485017922'
	];

	fixtures.forEach(function (el) {
		if (!creditCardRegex().exec(el)) {
			t.assert(false, el);
			return;
		}

		t.assert(creditCardRegex().exec(el)[0] === el, el);
	});

	t.end();
});
