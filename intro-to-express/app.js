const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
// app.get("/login", (req, res) => res.send("Login Page!"));

const PORT = 3001;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));