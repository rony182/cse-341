const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Priscilla Santos');
});

module.exports = routes;