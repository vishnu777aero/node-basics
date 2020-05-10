const eventEmitter = require('events');
const emitter      = new eventEmitter();

const sayHiBack = () => {
    console.log('Hello to you too!');
}

emitter.on('iSaidHi', sayHiBack);

emitter.emit('iSaidHi');