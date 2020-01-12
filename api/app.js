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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('serv up')
=======
    console.log('Server start at http://localhost:' + port)
>>>>>>> 80f1117d8d4faf2fd16995f341cda7bf9e517ac2
=======
    console.log('Server start at http://localhost:' + port)
>>>>>>> f0b7acd19473762f1abd0074dbbb1706b2cea081
};

module.exports = {
    runServer
};