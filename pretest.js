'use strict';

var vfs = require('vinyl-fs');
var converter = require('sass-convert');

vfs.src('./src/tests.sass')
  .pipe(converter({
    from: 'sass',
    to: 'scss',
    rename : true
  }))
  .pipe(vfs.dest('./src'));

console.log('Conversion succeeded proceeding to test... 🍻');
