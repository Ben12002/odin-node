const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use('/new', newRouter);
app.use('/messages', messageRouter);

app.use((err, req, res, next) => {
  console.log("hello from error handler!");
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


const PORT = 3001
app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`))