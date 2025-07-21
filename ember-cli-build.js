'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Optional: any other build options
  });

  app.import('node_modules/axe-core/axe.min.js');

  return app.toTree();
};
