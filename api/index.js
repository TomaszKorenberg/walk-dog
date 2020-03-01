const {runServer} = require("./app.js");
const config = require('./config.json');

runServer(config.Server.port);

