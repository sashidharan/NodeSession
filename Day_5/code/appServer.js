const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    let load = fs.readFileSync(__dirname + '/index.htm');
    res.end(load);
}).listen('3000', 'localhost');