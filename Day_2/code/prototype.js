function Sample(first, second) {
    this.first = first;
    this.second = second; 
}

Sample.prototype.execute = function () {
    console.log('Hello '+ this.first +' '+ this.second);
}

let invoke = new Sample('Node', 'Js');
invoke.execute();

let invoke2 = new Sample('welcome', 'World');
invoke2.execute();

console.log(invoke.__proto__);
console.log(invoke2.__proto__);
console.log(invoke.__proto__ === invoke2.__proto__);