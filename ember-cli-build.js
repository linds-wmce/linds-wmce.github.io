const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // fingerprint: {
    //   prepend: 'https://linds-wmce.github.io/',
    // },
  });

  return app.toTree();
};
