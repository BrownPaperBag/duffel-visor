var path = require('path');

module.exports = function(app) {
  var assetManager = app.get('assetManager');

  var privateDirectory = path.join(__dirname, '/../../private/');

  assetManager.addFiles({
    permission: 'login',
    profile: 'visor',
    after: [
      'angular', 'angular-gravatar'
    ],
    before: 'ng-application-bootstrap',
    js: [
      path.join(privateDirectory, '/javascript/applications/visor/application.js'),
      path.join(privateDirectory, '/javascript/applications/visor/controllers.js'),
      path.join(privateDirectory, '/javascript/directives/duffel-visor.js')
    ],
    css: [
      path.join(privateDirectory, '/css/styles.css')
    ]
  });
};
