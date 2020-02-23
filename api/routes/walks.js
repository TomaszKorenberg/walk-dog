const {insertWalk} = require('../db/models/WalksModel.js');
const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.post('/walks', [authenticationMiddleware], function (req, res) {
        console.log(req.body)
        insertWalk({})
            .catch(error =>res.status(400).json(error))
            .then(walk => res.json(walk));

    });
}
