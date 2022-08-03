const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log('Hello from response first time');
});
customEmitter.on('response', (name, id) => {
  console.log(`This is another emitter  ${name} with id ${id}`);
});

customEmitter.emit('response', 'Bob', 3434323134);
