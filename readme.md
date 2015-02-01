# credit-card-regex [![Build Status](http://img.shields.io/travis/kevva/credit-card-regex.svg?style=flat)](https://travis-ci.org/kevva/credit-card-regex)

> Regular expression for matching credit card numbers

## Install

```sh
$ npm install --save credit-card-regex
```

## Usage

```js
var creditCardRegex = require('credit-card-regex');

creditCardRegex().test('6011881485017922 foo bar');
//=> true

creditCardRegex({exact: true}).test('6011881485017922 foo bar');
//=> false

creditCardRegex({exact: true}).test('6011881485017922');
//=> true

'foo 6011881485017922 bar 5441068611005540'.match(creditCardRegex());
//=> ['6011881485017922', '5441068611005540']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
