// Your Javascript Code Goes Here
// fn statement
function greet() {
    console.log('hi');
}
greet();

// fn are first class
function logGreeting(fn) {
    fn()
}

logGreeting(greet);

// fn expression
var greetMe = function () {
    console.log('Hi Node Js');
}

// it's first class
logGreeting(greetMe); 

// use the function expression in on fly or IIFE
logGreeting(function () {
    console.log('Hello team......');
})

var firstname = 'Hello Js'
(function (lastname){
	var firstname = 'node';
	console.log(firstname);
	console.log(lastname)
}('js'));

console.log(firstname);