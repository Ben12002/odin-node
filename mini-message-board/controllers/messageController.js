const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getMessageById = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const message = await db.getMessageById(Number(messageId));
    if (!message) {
      throw new CustomNotFoundError('Could not find message with that id.');
    }
    res.render('detail', {message: message});
  } catch(err) {
    next(err);
  }
}

const getAllMessages = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    if (!messages) {
      throw new CustomNotFoundError('Could not find any messages');
    }
    res.render('messages', {messages: messages});
  } catch(err) {
    next(err);
  }
}



module.exports = {getMessageById, getAllMessages}