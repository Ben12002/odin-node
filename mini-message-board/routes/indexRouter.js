const { Router } = require("express");
const messages = require('../db');
const indexRouter = Router();



indexRouter.get("/", (req, res, next) => {
  res.render('index', { messages: messages });
});

module.exports = indexRouter;