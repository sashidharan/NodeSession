const express = require('express');
const bodyParser = require('body-parser');

let app = express();

let port = process.env.port || 3000;

let getMethod = require(__dirname + '/route/getRoute');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log('Request URL----->', req.url);
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

getMethod(app);

app.post('/person', (req, res) => {
    console.log('Request Body -----> ', req.body);
    res.send("Data Parsed");
})

app.post('/personJson', (req, res) => {
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