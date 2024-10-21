const express = require('express');
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render('index', { links: links, users: users });
})

app.get("/about", (req, res) => {
  res.render('about', {links: links, text: "This is the about page."});
});

PORT = 3001;

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))