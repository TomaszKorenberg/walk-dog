const {insertWalk} = require('../db/models/WalksModel.js')

module.exports = (app) => {
    app.post('/walks', function (req, res) {
        console.log(req.body)
        insertWalk({})
            .catch(error =>res.status(400).json(error))
            .then(walk => res.json(walk));

    });
}