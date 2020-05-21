const __ = require('underscore');

let arr = [];

arr.push(()=>{
    console.log('Welcome to Underscore 1');
})
arr.push(()=>{
    console.log('Welcome to Third Party Module');
})
arr.push(()=>{
    console.log('Welcome to Node Js');
})

__.each(arr, item => {
    item();
})

console.log(__.allKeys(arr))