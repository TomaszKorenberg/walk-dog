const {insertWalk} = require('../db/models/WalksModel.js');
const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.post('/walks', [authenticationMiddleware], function (req, res) {
        insertWalk(req.body)
            .catch(err =>res.status(400).send(err))
            .then(() =>{
                res.send({status:"ok"})});

    });
};