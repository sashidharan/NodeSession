const request = require('request');
const formData = {
      todo: 'Buy the milk'
    };

request.post('http://localhost:3000/api', {json : formData}, (err, res, body) => {
    if (err) throw err;
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  }
)