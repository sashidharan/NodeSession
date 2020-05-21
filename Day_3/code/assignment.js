const Emitter = require('events').EventEmitter;
const fs = require('fs');

var event = new Emitter();

event.addListener('fileRead', (callback)=> {
    fs.readFile(__dirname + '/sample.txt', callback)
});

event.addListener('fileWrite', (data, callback)=> {
    fs.writeFile(__dirname + '/sample_write.txt', data, callback) 
});

let fileWrite = (err, data) => {
    event.emit('fileWrite', data, err => {
        if(err) throw err;
        console.log('File Write Successfully');
    });
}

event.emit('fileRead', fileWrite);

event.removeListener('fileRead', ()=> {
    console.log('listener removed');
});
console.log(event.emit('fileRead'));
