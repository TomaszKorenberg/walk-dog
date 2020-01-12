const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('hello world')
});

const runServer = (port) => {
    app.listen(port);
    console.log('serv up')
};

module.exports = {
    runServer
};