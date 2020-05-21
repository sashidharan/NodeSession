function Emitter() {
    this.events = {};
}
Emitter.prototype.on = function (eventtype, eventListener) {
    this.events[eventtype] = this.events[eventtype] || [];
    this.events[eventtype].push(eventListener);
}

Emitter.prototype.emit = function (eventtype) {
    if(this.events[eventtype]) {
        this.events[eventtype].forEach(listener => {
            listener();
        });
    }
}

var event = new Emitter();

event.on('sample', ()=> {
    console.log('Invoked the Sample event 1')
});

event.on('sample', ()=> {
    console.log('Invoked the Sample event 2')
});

event.emit('sample');