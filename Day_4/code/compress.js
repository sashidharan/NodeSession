const fs = require('fs');

const zlib = require('zlib');

let lorem = fs.createReadStream(__dirname + '/lorem.txt');

let writeable = fs.createWriteStream(__dirname + '/lorem_pipe_uzip.txt')

let compress = fs.createReadStream(__dirname + '/compress.txt.gz');

let gzip = zlib.createGzip();
let unzip = zlib.createGunzip();

// lorem.pipe(gzip).pipe(compress);

compress.pipe(unzip).pipe(writeable);
