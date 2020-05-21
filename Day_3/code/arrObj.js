var obj = {
    sample: 'Nodejs'
}

console.log(obj.sample);
console.log(obj['sample']);
var name = 'sample';
console.log(obj[name]);

var arr = [];
arr.push(()=>{
    console.log('Hello Node Js 2')
})

arr.push(()=>{
    console.log('Hello Node Js 3')
})

arr.push(()=>{
    console.log('Hello Node Js 5')
})

arr.forEach((item) =>{
    item();
})