const express = require('express');
const app = express.Router();

    app.get('/', (req, res) => {
        let content = "<html><head><link href=assets/style.css type=text/css rel=stylesheet ></link></head><body><h2>Hi ExpressJs</h2></body></html>";
        res.send(content);
    })
    
    app.get('/render', (req, res) => {
        res.render('index');
    })
    
    app.get('/postData', (req, res) => {
        res.render('postData');
    })
    
    app.get('/person/:id', (req, res) => {
        res.render('person', {id: req.params.id, name: req.query.name});
    });

module.exports = app