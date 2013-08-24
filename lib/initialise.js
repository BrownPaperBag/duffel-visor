var visor = require('./visor.js');

module.exports = function(app) {
  require('./initialisers/assetify')(app);

  /**
   * Add the visor object to template locals.
   *
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   * @param {Function} next
   */
  app.before('router').use(function visorLocals(req, res, next) {
    res.locals.visor = visor.prepareRenderer(req, res);
    next();
  }).as('visor');
};
