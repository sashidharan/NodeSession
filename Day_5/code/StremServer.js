const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
}).listen('3000', 'localhost');