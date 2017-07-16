const path = require('path')
const sassTrue = require('sass-true')

const sassFile = path.join(__dirname, 'grid.test.scss')

sassTrue.runSass({ file: sassFile }, describe, test)
