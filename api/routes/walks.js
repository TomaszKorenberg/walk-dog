const {insertWalk, getWalks, getWalk} = require('../db/models/WalksModel.js');
const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.post('/walks', [authenticationMiddleware], function (req, res) {
        insertWalk(req.body)
            .catch(err =>res.status(400).send(err))
            .then(() =>{
                res.send({status:"ok"})});

    });

    app.get('/walks',[authenticationMiddleware], (req, res) => {
        getWalks()
            .catch(err =>res.status(400).send(err))
            .then((result) =>{res.send(result)});
    });

    app.get('/walks/:id',[authenticationMiddleware], (req, res) => {
        getWalk(req.params.id)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                res.send(result);
            });
    })

};