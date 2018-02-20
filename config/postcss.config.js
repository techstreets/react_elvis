const postCSSConfig = {
  plugins: [
    require('postcss-initial')({
      // reset only inherited rules
      reset: 'inherited'
    }),
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: require('../src/mixins')
    }),
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: function variables() {
        return require('../src/variables.js');
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, 'Unknown variable ' + name);
      }
    }),
    require('postcss-assets')({
      relative: true,
      cachebuster: true,
      loadPaths: ['./public/img/']
    }),
    require('postcss-inline-svg')({
      path: './public/img/'
    }),
    // 'autoprefixer' is included in postcss-cssnext
    require('postcss-cssnext'),
    require('postcss-custom-media'),
    require('postcss-math'),
    require('postcss-color-function'),
  ]
};

module.exports = postCSSConfig;
