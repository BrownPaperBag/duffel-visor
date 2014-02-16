var path = require('path');

module.exports = function(app) {
  var assetManager = app.get('assetManager');

  var privateDirectory = path.join(__dirname, '/../../private/');

  assetManager.addFiles({
    permission: 'login',
    profile: 'core-logged-in',
    js: [
      path.join(privateDirectory, '/javascript/applications/visor/application.js'),
      path.join(privateDirectory, '/javascript/applications/visor/controllers.js')
    ]
  });
};
