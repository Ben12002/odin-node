const { Router } = require("express");
const messages = require('../db');
const newRouter = Router();
const { createMessage } = require('../controllers/newController');

newRouter.get('/', (req, res, next) => {
  res.render('form');
});

newRouter.post('/', createMessage);

module.exports = newRouter;