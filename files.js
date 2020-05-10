const fs = require('fs');

/*******************************
 * //Synchronous function
 * //all functions have a sync and async version, always prefer async.
 * 
 * const files = fs.readdirSync('./');
 * 
 ******************************/

fs.readdir('./', (error, success) => {
    if (error) console.log(error);
    else console.log(success);
});