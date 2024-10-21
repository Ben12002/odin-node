const express = require("express");

const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => res.send("hello."));

const PORT = 3001
app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`))