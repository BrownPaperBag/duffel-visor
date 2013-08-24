var path = require('path');

module.exports = function(app) {
  var assetify = app.get('assetify');
  if (!assetify) {
    return;
  }
  assetify.addFiles({
    js: [
    ]
  });
};
