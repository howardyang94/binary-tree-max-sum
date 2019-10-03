require('rootpath')();

var cluster = require('cluster')
, http = require('http')
, numCPUs = require('os').cpus().length
, port = 4000;

// have master create workers
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
  
    cluster.on('online', worker => {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('Starting a new worker');
        cluster.fork();
    });

} else {
    var express = require('express')
    , app = express()
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , jwt = require('_helpers/jwt')
    , errorHandler = require('_helpers/error-handler');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
  
  // use JWT auth to secure the api
    app.use(jwt());
  
  // api routes
    app.use('/users', require('./users/users.controller'), () => { console.log('process ' + process.pid + ' is handling /users').end() });
    app.use('/treeSum', require('./treeSum/treeSum.controller'), () => { console.log('process ' + process.pid + ' is handling /treeSum').end() });
  
  // global error handler
    app.use(errorHandler);
  
  // start server
    var server = app.listen(port, () => {
        console.log('Process ' + process.pid + ' is listening on port ' + port);
    });
}
