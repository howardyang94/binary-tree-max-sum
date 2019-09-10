require('rootpath')();

// create a cluster to make backend more robust
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var port = 4000; // process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

// have master create workers
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
  
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
  // workers
    var express = require('express');
    var app = express();
    var cors = require('cors');
    var bodyParser = require('body-parser');
    var jwt = require('_helpers/jwt');
    var errorHandler = require('_helpers/error-handler');
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
  
  // use JWT auth to secure the api
    app.use(jwt());
  
  // api routes
    app.use('/users', require('./users/users.controller'), function() {console.log('process ' + process.pid + ' is handling /users').end();});
    app.use('/treeSum', require('./treeSum/treeSum.controller'), function() {console.log('process ' + process.pid + ' is handling /treeSum').end();});
  
  // global error handler
    app.use(errorHandler);
  
  // start server
//   const port = 4000;// process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
    var server = app.listen(port, function () {
        console.log('Process ' + process.pid + ' is listening on port ' + port);
    });
}