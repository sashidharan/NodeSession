const express = require('express');
let route = express.Router();
let userCtrl = require('../controller/userController');


route.get('/', (req, res) => {
    let user = new userCtrl(req, res);
    user.getUsers();
});

route.post('/', (req, res) => {
    let user = new userCtrl(req, res);
    user.createUser();
});

route.get('/:id', (req, res) => {
    let user = new userCtrl(req, res);
    user.getUserById();
});

route.put('/:id', (req, res) => {
    let user = new userCtrl(req, res);
    user.updateUser();
});

route.delete('/:id', (req, res) => {
    let user = new userCtrl(req, res);
    user.deleteUser();
});

module.exports = route;