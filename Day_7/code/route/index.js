const express = require('express');
let route = express.Router();


route.get('/', (req, res) => {
    let db = req.app.locals.dbCont;
    db.collection('users').find({}).toArray((err, response) => {
        if (err) throw err;
        console.log('response------>', response);
    });
    db.collection('users').insert({}).toArray((err, response) => {
        if (err) throw err;
        console.log('response------>', response);
    });
    res.render('index');
});

route.get('/user', (req, res) => {
    res.render('users');
});

route.post('/users', (req, res) => {
    console.log('Request Body========>', req.body)
    res.send('Data Parsed');
})
route.post('/usersJson', (req, res) => {
    console.log('Request Body========>', req.body)
    res.send('Data Parsed');
})

module.exports = route;