var __ = require('underscore');

module.exports = {
  prepareRenderer: function(app, req, res) {
    return {
      render: function render() {
        var template = app.get('nunjucksEnvironment').getTemplate('/duffel-visor/visor.html');
        return template.render(__.extend({}, res.locals));
      }
    }
  }
}
