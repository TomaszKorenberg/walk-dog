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
    console.log('Server start at http://localhost:' + port)
};

require('./routes/user')(app);
require('./routes/walks')(app);
require('./routes/pets')(app);
require('./routes/admin')(app);



module.exports = {
    runServer
};
