const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.send('Hello, Priscilla! How are you today?');
// });
routes.use('/contacts', require('./contacts'));

module.exports = routes;