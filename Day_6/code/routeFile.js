const express = require('express');
const bodyParser = require('body-parser');

let app = express();

let port = process.env.port || 3000;

let jsonParser = bodyParser.json();
let urlencoder = bodyParser.urlencoded({extended: false});
let getMethod = require(__dirname + '/route/getRoute');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log('Request URL----->', req.url);
    next();
});

getMethod(app);

app.post('/person', urlencoder, (req, res) => {
    console.log('Request Body -----> ', req.body);
    res.send("Data Parsed");
})

app.post('/personJson', jsonParser, (req, res) => {
    console.log('Request Body -----> ', req.body);
    res.send("Data Json Parsed");
})


app.get('/api', (req, res) => {
    let obj = {
        firstName : "NodeJS",
        secondName : "ExpressJs"
    };
    res.send(obj);
})

app.listen(3000);