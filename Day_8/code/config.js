const jsonToken = require('jsonwebtoken');

module.exports = {
    createToken: (req, res) => {        
        let timestamp = new Date();
        let key = 'thisismyapp'
        jsonToken.sign(timestamp.toISOString(), key, (err, token) => {
            if(err) throw err;
            res.send(token);
        })
    },
    verifyToken: (req, res, next) => {
        if(req.url !== '/token') {
            let authenticate = req.headers.authorization;        
            jsonToken.verify(authenticate, 'thisismyapp', (err, decode) => {
                if(err) {
                    err = {
                        name: err.name,
                        message: err.message
                    }
                    res.send(err);
                } else {
                    next();
                }
            })
        }
    }
}