const express = require('express');
const app = express();

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`My server is running at: http://localhost:${PORT}`);
})
