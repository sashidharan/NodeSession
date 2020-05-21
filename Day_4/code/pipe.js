const fs = require('fs');

// let sample = fs.readFileSync(__dirname + '/sample.txt');
// console.log(sample);

// let sample1 = fs.readFile(__dirname + '/sample.txt', (err, data) => {
//     console.log(data)
// })

// console.log('done')

let lorem = fs.createReadStream(__dirname + '/lorem.txt');

let writeable = fs.createWriteStream(__dirname + '/lorem_pipe.txt',)

lorem.pipe(writeable)