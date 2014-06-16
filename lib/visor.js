var __ = require('underscore');

function markActiveItem(items, uri) {
  items.forEach(function(item) {
    if (uri.indexOf(item.uri) === 0) {
      item.active = true;
    }
  });
  return items;
}

module.exports = {
  prepareRenderer: function(app, req, res) {
    return {
      render: function render() {
        var collector = app.get('visor');
        var userItems = collector.getItemsForUser(req.user);
        if (userItems.length) {
          userItems = markActiveItem(userItems, req.path);
          return app.get('nunjucksEnvironment').render('/duffel-visor/visor.nunjucks', __.extend({
            visorItems: userItems
          }, res.locals));
        }
        return '';
      }
    };
  }
};
