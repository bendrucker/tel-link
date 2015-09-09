# tel-link [![Build Status](https://travis-ci.org/bendrucker/tel-link.svg?branch=master)](https://travis-ci.org/bendrucker/tel-link)

> Create a tel protocol link


## Install

```
$ npm install --save tel-link
```


## Usage

```js
var telLink = require('tel-link')

telLink('411')
//=> tel:411
```

## API

#### `telLink(phone)` -> `string`

##### phone

A phone number to convert into a tel protocol link.


## License

MIT © [Ben Drucker](http://bendrucker.me)
