const {insertPet, getPet} = require('../db/models/PetsModel.js');
const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.post('/pets', [authenticationMiddleware], function (req, res) {
        insertPet(req.body)
            .catch(err =>res.status(400).send(err))
            .then(() =>{
                res.send({status:"ok"})});
    });

    app.get('/pets', (req, res) => {
        getPet()
            .catch(err =>res.status(400).send(err))
            .then((result) =>{res.send(result)});
    })

};