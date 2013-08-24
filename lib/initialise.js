var visor = require('./visor.js'),
  path = require('path'),
  nunjucks = require('nunjucks');

module.exports = function(app) {
  require('./initialisers/assetify')(app);

  app.set('visor', visor.collector);

  app.get('nunjucksEnvironment').loaders
    .push(new nunjucks.FileSystemLoader(path.join(__dirname, 'views')));

  /**
   * Add the visor object to template locals.
   *
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   * @param {Function} next
   */
  app.before('router').use(function visorLocals(req, res, next) {
    res.locals.visor = visor.prepareRenderer(app, req, res);
    next();
  }).as('visor');
};
