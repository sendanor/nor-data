[![Build Status](https://secure.travis-ci.org/Sendanor/nor-data.png?branch=master)](http://travis-ci.org/Sendanor/nor-data)

nor-data
========

Helpers for dealing with JavaScript data

Install
-------

`npm install nor-data`

Usage
-----

### `copy(value)`

Declare it:

```javascript
var copy = require('nor-data').copy;
```

And use it:

```javascript
var obj = {"foo": 10};
var obj2 = copy(obj);
obj2.foo = 100;
assert( obj.foo !== obj2.foo );
```

Test it
-------

```
npm install -d
npm run lint
npm run test
```
