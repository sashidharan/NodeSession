const express = require('express');
const mongo = require('mongodb');
const config = require('./config');
const mongoClient = mongo.MongoClient
let app = express();

app.locals.mongo = mongo;

let indexRoute = require(__dirname + '/route/index');
let userRoute = require(__dirname + '/route/user');
let url = "mongodb://localhost:27017/";

mongoClient.connect(url, {useUnifiedTopology: true}, (err, _DB) => {
    if(err) throw err;
    app.locals._db = _DB
})

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/token', config.createToken);

app.use(config.verifyToken);

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(3000);