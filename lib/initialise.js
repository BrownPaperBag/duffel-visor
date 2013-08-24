var visor = require('./visor.js');

module.exports = function(app) {
  require('../initialisers/assetify')(app);
  app.before('router').use(function visorLocals(req, res, next) {
    res.locals.visor = visor.prepareRenderer(req, res);
  }).as('visor');
  app.use('/duffel-visor', express.static(__dirname + '/../public'));
};
