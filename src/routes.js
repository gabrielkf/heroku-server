const { Router } = require('express');
const knex = require('../db/knex');

const routes = Router();

/* HOME PAGE */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Team13' });
});

/* DATABASE */
routes.get('/products', async (req, res) => {
  await knex
    .raw('SELECT * from products')
    .then(products => {
      res.send(products.rows);
    });
});

routes.get('/stock', async (req, res) => {
  await knex.raw('SELECT * from stock').then(stock => {
    res.send(stock.rows);
  });
});

routes.get('/sellers', async (req, res) => {
  await knex.raw('SELECT * from sellers').then(sellers => {
    res.send(sellers.rows);
  });
});

routes.get('/clients', async (req, res) => {
  await knex.raw('SELECT * from clients').then(clients => {
    res.send(clients.rows);
  });
});

module.exports = routes;
