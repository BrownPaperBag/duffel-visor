var collector = require('./collector'),
  path = require('path'),
  nunjucks = require('nunjucks');

module.exports = function(app, callback) {
  require('./initialisers/assets')(app);

  app.set('visor', collector);

  app.get('nunjucksEnvironment')
    .addExtension('visor', require('../lib/nunjucks-tags/visor')(app));

  app.get('nunjucksEnvironment').loaders
    .push(new (app.get('nunjucks')).FileSystemLoader(path.join(__dirname, 'views')));

  /**
   * Add the visor object to template locals.
   *
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   * @param {Function} next
   */
  app.before('router').use(function visorLocals(req, res, next) {
    res.locals.path = req.path;
    next();
  });

  callback();
};
