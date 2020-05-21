const express = require('express');

let app = express();

let port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log('Request URL----->', req.url);
    next();
});

app.get('/', (req, res) => {
    let content = "<html><head><link href=assets/style.css type=text/css rel=stylesheet ></link></head><body><h2>Hi ExpressJs</h2></body></html>";
    res.send(content);
})

app.get('/render', (req, res) => {
    res.render('index');
})

app.get('/person/:id', (req, res) => {
    res.render('person', {id: req.params.id});
})

app.get('/api', (req, res) => {
    let obj = {
        firstName : "NodeJS",
        secondName : "ExpressJs"
    };
    res.send(obj);
})

app.listen(3000);