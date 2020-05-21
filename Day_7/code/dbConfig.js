module.exports =  (mysql, callback) => {
    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'test'
    })
    callback(null, connection);
}