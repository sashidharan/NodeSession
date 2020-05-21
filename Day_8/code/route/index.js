const express = require('express');
let route = express.Router();


route.get('/', (req, res) => {
    res.render('index');
});

route.get('/user', (req, res) => {
    res.render('users');
});

route.post('/', (req, res) => {
    console.log('Request Body========>', req.body)
    res.send('Data Parsed');
})
route.post('/usersJson', (req, res) => {
    console.log('Request Body========>', req.body)
    res.send('Data Parsed');
})

module.exports = route;