const path = require('path')
const sassTrue = require('sass-true')

const sassFile = path.join(__dirname, 'breakpoints.test.scss')

sassTrue.runSass({ file: sassFile }, describe, test)
