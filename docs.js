var sassdoc = require('sassdoc')

var config = require('./sassdocs.config')

sassdoc('./mixins/*.{sass,scss}', config)
  .then(function () {
    console.log('Your documentation has been generated!')
  }, function (err) {
    console.log('There has been an error:')
    console.error(err)
  })
