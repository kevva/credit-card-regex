'use strict';

var test = require('ava');
var creditCardRegex = require('../');

test('match credit card numbers', function (t) {
	var fixtures = [].concat(
		require('./fixtures/americanexpress.json'),
		require('./fixtures/dinersclub.json'),
		require('./fixtures/discover.json'),
		require('./fixtures/jcb.json'),
		require('./fixtures/maestro.json'),
		require('./fixtures/mastercard.json'),
		require('./fixtures/visa.json')
	);

	fixtures.forEach(function (el) {
		if (!creditCardRegex().exec(el)) {
			t.assert(false, el);
			return;
		}

		t.assert(creditCardRegex().exec(el)[0] === el, el);
	});

	t.end();
});
