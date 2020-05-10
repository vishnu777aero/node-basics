const eventEmitter = require('events');
const emitter      = new eventEmitter();

const sayHiBack = (args) => {
    console.log('Hello to you too!', args);
}

emitter.on('iSaidHi', sayHiBack);

emitter.emit('iSaidHi', { id: 123, type: 'greetings'});