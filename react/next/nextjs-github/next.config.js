const withCss = require('@zeit/next-css')
// withLess


if(typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss({})