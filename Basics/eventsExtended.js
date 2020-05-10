const EventEmitter = require('events');

class Greeter extends EventEmitter {
    sayHi() {
        this.emit('hi', { message: 'Hi' });
    }
}

module.exports = Greeter;