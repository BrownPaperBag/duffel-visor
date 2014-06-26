var __ = require('underscore');

function beginsWith(needle, haystack){
    return (haystack.substr(0, needle.length) == needle);
}

function markActiveItem(items, uri) {
  items.forEach(function(item) {
    if (beginsWith(item.uri, uri)) {
      item.active = true;
    }
  });
  return items;
}

module.exports = function(app) {
  return new function() {
    this.tags = ['visor'];

    this.parse = function(parser, nodes) {
      var tok = parser.nextToken();
      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);

      var body = parser.parseUntilBlocks('endvisor');
      parser.advanceAfterBlockEnd();

      return new nodes.CallExtensionAsync(this, 'run', args, [body]);
    };

    this.run = function(context, body, callback) {
      var collector = app.get('visor');
      var userItems = collector.getItemsForUser(context.ctx.user);

      if (!userItems.length) {
        return callback(null, '');
      }

      userItems = markActiveItem(userItems, context.ctx._locals.path);
      app.get('nunjucksEnvironment').render('/duffel-visor/visor.nunjucks', __.extend({
        visorItems: userItems
      }, context.ctx._locals), function(error, html) {
        if (error) throw error;
        callback(null, html);
      });
    };
  };
};
