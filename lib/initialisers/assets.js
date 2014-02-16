var path = require('path');

module.exports = function(app) {
  var assetify = app.get('assetify');
  if (!assetify) {
    throw new Error('Assetify is required');
  }

  var privateDirectory = path.join(__dirname, '/../../private/');

  assetify.addFiles({
    profile: 'core-logged-in',
    css: [
      path.join(privateDirectory, '/css/visor.css')
    ],
    js: [
      path.join(privateDirectory, '/javascript/applications/visor/application.js'),
      path.join(privateDirectory, '/javascript/applications/visor/controllers.js')
    ]
  });
};
