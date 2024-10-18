const events = require('events');

myEmitter = new events.EventEmitter();


// Create new event called 'hello' that has no arguments
myEmitter.on('hello', () => {
  console.log('hello event has occurred');
})

myEmitter.emit('hello');