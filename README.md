# credit-card-regex [![Build Status](http://img.shields.io/travis/kevva/credit-card-regex.svg?style=flat)](https://travis-ci.org/kevva/credit-card-regex)

> Regular expression for matching credit card numbers

## Install

```sh
$ npm install --save credit-card-regex
```

## Usage

```js
var urlRegex = require('credit-card-regex');

urlRegex().test('6011881485017922');
//=> true

urlRegex().exec('Credit card number: 6011881485017922')[0].trim();
//=> 6011881485017922

'Multiple 5441068611005540 6011881485017922 numbers'.match(urlRegex());
//=> ['5441068611005540', '6011881485017922']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
