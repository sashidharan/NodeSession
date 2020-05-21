const Emitter = require('events').EventEmitter;

var event = new Emitter();

var Inherit = function () {
    this.sample = 'Welcome to inherit event';
}

/*Inherit.prototype = Object.create(event.__proto__, {
    Constructor: {
        value: Inherit,
        enumerable: false,
        writable: true,
        configurable: true
    }
});*/


Inherit.prototype = Object.create(Emitter.prototype, {
    Constructor: {
        value: Inherit,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Inherit.prototype.execute = function (data) {
    console.log(this.sample +'-->'+ data);
    this.emit('sample', data);
}

var inheritObj = new Inherit(); 

inheritObj.on('sample', (data)=> {
    console.log('Invoked the Sample event 1', data)
});

// inheritObj.on('sample', ()=> {
//     console.log('Invoked the Sample event 2')
// });

inheritObj.execute('Hi Nodejs');