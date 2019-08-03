/*
Nuxt.js module for vue-plugin
Usage:
    - Install vue-plugin package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-plugin/nuxt'
            // Optionally passing options in module configuration
            ['vue-plugin/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VuePlugin: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VuePlugin, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vue-plugin-plugin.template.js.tpl'),
    fileName: 'vue-plugin-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
