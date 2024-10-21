const db = require('../db');
const CustomCannotCreateError = require ('../errors/CustomCannotCreateError');

const createMessage = async (req, res, next) => {
  try {
    const author = req.body.author;
    const text = req.body.message;
    const success = await db.createMessage(author, text);

    if (!success) {
      throw new CustomCannotCreateError('Could not create new message');
    }
    res.redirect('/messages');
  } catch(err) {
    next(err);
  }
}

module.exports = { createMessage };