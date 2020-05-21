const express = require('express');
const mysql = require('mysql');
const mongo = require('mongodb').MongoClient;

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Sample')
let scheme = mongoose.Schema;

let userScheme = scheme({
    firstName: String,
    lastName: String,
    address: String
})

let user = mongoose.model('User', userScheme);

user({ firstName: 'Nodejs', lastName: 'Framework', address: 'Local' }).save((err) => {
    if(err) throw err;
    console.log('dataInserted')
})
// user({ firstName: 'ExpressJs', lastName: 'Framework', address: 'International' });


let app = express();
let indexRoute = require(__dirname + '/route/index');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.MongoClient
app.use((req, res, next) => {
    user.find({}, (err, response) => {
        console.log('-----<', response);
    });
    next();
});


app.use('/', indexRoute);

app.listen(3000);