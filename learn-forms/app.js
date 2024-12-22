const express = require("express");
const path = require("node:path");
const app = express();
const usersRouter = require("./routes/usersRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));