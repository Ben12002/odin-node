const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send('Home'));

indexRouter.get("/about", (req, res) => res.send('About'));

indexRouter.get("/contact", (req, res) => res.send('Contact'));

indexRouter.post("/contact", (req, res) => res.send('POST Contact'));

module.exports = indexRouter;