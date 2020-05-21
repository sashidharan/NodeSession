const express = require('express');

let app = express();

let port = process.env.port || 3000;

app.get('/', (req, res) => {
    let content = "<html><head></head><body><h2>Hi ExpressJs</h2></body></html>";
    res.send(content);
})

app.get('/person/:id', (req, res) => {
    let content = "<html><head></head><body>Person: "+ req.params.id+"</body></html>";
    res.send(content);
})

app.get('/api', (req, res) => {
    let obj = {
        firstName : "NodeJS",
        secondName : "ExpressJs"
    };
    res.send(obj);
})

app.listen(3000);