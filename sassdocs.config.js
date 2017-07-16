const pkg = require('./package.json')

module.exports = {
  'dest': './dist',
  'groups': {
    'undefined': 'General',
    'layout': 'Layout',
    'styling': 'Styling',
    'bem': 'BEM'
  },
  'package': {
    'title': 'Manila Mixins',
    'name': pkg.name,
    'version': pkg.version,
    'license': 'MIT',
    'homepage': 'https://github.com/mike3run/manila-mixins',
    'description': 'A bunch of really cool Sass Mixins'
  },
  'theme': 'flippant',
  'verbose': 'true'
}
