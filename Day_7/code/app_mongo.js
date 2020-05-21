const express = require('express');
const mysql = require('mysql');
const mongo = require('mongodb').MongoClient;
let app = express();

let indexRoute = require(__dirname + '/route/index');
let db = require(__dirname + '/dbConfig');
global.db = '';

app.set('view engine', 'ejs');

let url = "mongodb://localhost:27017/mongo_session";
mongo.connect(url, {useUnifiedTopology: true}, (err, _db) => {
    app.locals.dbCont = _db.db('Sample');

    _db.db('Sample').collection('users').find({}).toArray((err, response) => {
        console.log('res--->', response);
    })
})
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.MongoClient
app.use((req, res, next) => {
    // db(mysql, (err, dbConc) => {        
    //     dbConc.query('SELECT * FROM users', (err, rows) => {
    //         console.log('rows----->', rows);
    //     })
    // });
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', indexRoute);

app.listen(3000);