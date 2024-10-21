const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    id: 3,
    text: "How are you?",
    user: "John",
    added: new Date()
  },
  {
    id: 4,
    text: "Good! How about you?",
    user: "Claire",
    added: new Date()
  }
];

async function getMessageById(id) {
  return messages.find(message => message.id === id);
}

async function getAllMessages() {
  return messages;
}

async function createMessage(author, text) {
  const oldLength = messages.length;

  if (text.length === 0 || !author) {
    return false;
  }

  const newMessage = {
    text,
    user: author,
    added: new Date(),
    id: messages.length + 1
  }

  messages.push(newMessage);
  isSuccess = messages.length > oldLength;
  return isSuccess;
}

module.exports = {getMessageById, getAllMessages, createMessage}