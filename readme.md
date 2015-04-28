# credit-card-regex [![Build Status](http://img.shields.io/travis/kevva/credit-card-regex.svg?style=flat)](https://travis-ci.org/kevva/credit-card-regex)

> Regular expression for matching credit card numbers


## Install

```
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


## API

### creditCardRegex(options)

Returns a regex for matching credit card numbers. It supports credit card numbers from the following vendors:

* American Express
* Diners Club
* Discover
* JCB
* Maestro
* MasterCard
* VISA

#### options.exact

Type: `boolean`  
Default: `false` *(Matches any credit card number in a string)*

Only match an exact string.  
Useful with `RegExp#test` to check if a string is a credit card number.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
