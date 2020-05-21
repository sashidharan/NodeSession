const http = require('http');
const fs = require('fs');

const serverConfig = {
    host: '127.0.0.1',
    port: 3000
}

http.createServer((req, res) => {
    let urlPath = req.url;
    let urlSplit = urlPath.split('/');
    console.log(urlSplit);
    let contentType = 'text/html';
    let resData = '';
    let statusCode = 200;

    switch(urlPath) {
        case '/api':
            let obj = {
                firstName: 'Node',
                lastName: 'Js'
            }
            resData = JSON.stringify(obj)
            contentType = 'application/json';
            break;
        
        case '/':
            resData = fs.readFileSync(__dirname + '/index.htm');
            break;

        default:
            statusCode = 404;
            resData = "<h2>Invalid Request</h2>"

    }    
    res.writeHead(statusCode, {'content-type' : contentType});
    res.end(resData);
}).listen(serverConfig);