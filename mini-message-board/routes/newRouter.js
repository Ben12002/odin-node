const { Router } = require("express");
const messages = require('../db');
const newRouter = Router();

newRouter.get('/', (req, res, next) => {
  res.render('form');
});

newRouter.post('/', (req, res, next) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/")
});

module.exports = newRouter;