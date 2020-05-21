const express = require('express');
const mysql = require('mysql');
let app = express();

let indexRoute = require(__dirname + '/route/index');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('Requset URL======>', req.url);
    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'test'
    })
    connection.query('SELECT * FROM users', (err, rows) => {
        console.log('rows----->', rows);
    })
    next();
})

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', indexRoute);

app.listen(3000);