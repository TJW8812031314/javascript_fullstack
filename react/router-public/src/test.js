const { pathToRegExp } = require('path-to-regexp').pathToRegexp;

let reg = pathToRegExp('/home', [], {end: false})
console.log(reg)