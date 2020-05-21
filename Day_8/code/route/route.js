module.exports = (app) => {
    app.get('/', (req, res) => {
        let content = "<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h2>Welcome to ExpressJs</h2></body></html>"
        res.send(content);
    });


    app.get('/users/:id', (req, res) => {
        let content = "<html><head></head><body><h2>User Id: "+req.params.id+"==" +req.query.name+ "</h2></body></html>"
        res.send(content);
    })

    app.get('/apiMethod', (req, res) => {
        let obj = {
            fistname: 'Node',
            lastname: 'JS'
        }
        res.send(obj);
    })
};
