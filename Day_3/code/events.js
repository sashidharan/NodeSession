const Emitter = require('events').EventEmitter;

var event = new Emitter();

event.on('sample', ()=> {
    console.log('Invoked the Sample event 1')
});

event.on('sample', ()=> {
    console.log('Invoked the Sample event 2')
});

event.emit('sample');