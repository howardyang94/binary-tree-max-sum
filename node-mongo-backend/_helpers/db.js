var config = require('config.json');
var mongoose = require('mongoose');
mongoose.connect(
    // docker string
// "mongodb://mongo:27017/node-mongo-database-api", {
    // local string
process.env.MONGODB_URI || config.connectionString, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    // reconnectTries: 200, // Attempt to reconnect 200 times
    // reconnectInterval: 1000, // Reconnect every 1000ms
 });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};