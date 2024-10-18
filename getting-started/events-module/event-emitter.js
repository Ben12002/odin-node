const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


// Create a start event
eventEmitter.on('start', () => {
  console.log('started');
});

eventEmitter.emit('start');



// Create an event with argument
eventEmitter.on('foo', number => {
  console.log(`foo ${number}`);
});

eventEmitter.emit('foo', 23); // outputs 'foo 23'
eventEmitter.emit('foo'); // outputs 'foo undefined'


// Create an event with multiple arguments
eventEmitter.on('bar', (a, b) => {
  console.log(`bar ${a} ${b}`);
})

// Create another listener for the 'bar' event
eventEmitter.on('bar', () => {
  console.log(`BAR!!`);
});

// outputs 'bar hello 4', and then 'BAR!!'
// since 'bar' has two listeners
eventEmitter.emit('bar', 'hello', 4); 


console.log('---------------------------');
console.log(eventEmitter.eventNames());
console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.listenerCount('foo'));
console.log(eventEmitter.listeners('foo'));
console.log(eventEmitter.listeners('bar')); // has 2 listeners
