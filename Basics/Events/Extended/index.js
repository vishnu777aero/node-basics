const Greeter = require('./events');
const greeter = new Greeter();

greeter.on('hi', (e) => console.log(`Someone said ${e.message}`));
greeter.on('bye', () => console.log(
    `That someone's gone!! you could have said Hi back :(`
));

greeter.sayHi();    //event is emitted from a different place
greeter.emit('bye');