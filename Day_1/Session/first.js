let fs = require('fs');

/*fs.writeFile('./second.txt', 'Welcome to Node JS Session', (err, data) => {
	if(err) throw err;
	console.log('File Created');
});*/

fs.readFile('./first.txt', (err, data) => {
	console.log('err-------->', err);
});
console.log('End');