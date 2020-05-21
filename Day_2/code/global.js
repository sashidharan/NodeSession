console.log(__filename);
console.log(__dirname);

setTimeout(()=> {
    console.log('Hello Nodejs');
}, 2000);

var timeInterval = setInterval(() => {
    console.log('Triggered interval')
}, 2000);

setTimeout(()=> {
    console.log('Ending Time Interval');
    clearInterval(timeInterval);
}, 6000);

console.log(process.argv);