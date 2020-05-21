const cluster = require('cluster');
const express = require('express');
const numCPUs = require('os').cpus().length;

let app = express();

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs-4; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  app.listen(3000);
  app.get('/', (req, res) => {
      res.send('Hello World')
  })
  app.get('/close', (req, res) => {
      res.send('cluster');
  })

  console.log(`Worker ${process.pid} started`);
}