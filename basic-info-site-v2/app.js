const express = require("express");
const app = express();

// First way, give an absolute file path
// app.get("/", (req, res) => res.sendFile('/Users/benedictdamiantan/learn-code-2024/nodejs-practice/basic-info-site-v2/index.html'));

// Second way, use the options parameter with a root path. 
// Then you can use relative paths.
const OPTIONS = {
  root: '/Users/benedictdamiantan/learn-code-2024/nodejs-practice/basic-info-site-v2',
};

app.get("/", (req, res) => res.sendFile('./index.html', OPTIONS));
app.get("/about", (req, res) => res.sendFile('./about.html', OPTIONS));
app.get("/contact-me", (req, res) => res.sendFile('./contact-me.html', OPTIONS));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));