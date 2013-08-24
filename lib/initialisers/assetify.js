var path = require('path');

module.exports = function(app) {
  var assetify = app.get('assetify');
  if (!assetify) {
    return;
  }
  var publicDirectory = path.join(__dirname, '/../../public/');
  assetify.addFiles({
    css: [
      {
        file: path.join(publicDirectory, '/stylesheets/visor.css'),
        profile: 'core-logged-in'
      }
    ],
    js: [
      {
        file: path.join(publicDirectory, '/javascript/applications/visor/application.js'),
        profile: 'core-logged-in'
      },
      {
        file: path.join(publicDirectory, '/javascript/applications/visor/controllers.js'),
        profile: 'core-logged-in'
      }
    ]
  });
};
