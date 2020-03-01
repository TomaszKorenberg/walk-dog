const {runServer} = require("./app.js");
const config = require('./config.json');

runServer(config.Server.port);


const express = require('express');
const app = express();
app.use(express.static('public'));
const listen = app.listen(process.env.PORT || 3000, () => {
  console.log(listen.address());
});