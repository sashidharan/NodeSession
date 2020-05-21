const http = require('http');
const fs = require('fs');

const serverConfig = {
    host: '127.0.0.1',
    port: 3000
}

http.createServer((req, res) => {
    console.log(req.method);
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`)
        var postData = JSON.parse(chunk);
        console.log(postData.todo);
    })
    res.writeHead(200, {'content-type' : 'text/html'});
    let load = fs.readFileSync(__dirname + '/index.htm');
    res.end(load);
}).listen(3000);