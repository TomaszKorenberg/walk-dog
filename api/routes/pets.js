const {insertPet, getPet, getPetsByUser} = require('../db/models/PetsModel.js');
const {authenticationMiddleware} = require('../utils/token');

module.exports = (app) => {
    app.post('/pets', [authenticationMiddleware], function (req, res) {
        insertPet(req.body)
            .catch(err =>res.status(400).send(err))
            .then(() =>{
                res.send({status:"ok"})});
    });

    app.get('/pets', [authenticationMiddleware], (req, res) => {
        getPetsByUser()
            .catch(err =>res.status(400).send(err))
            .then((result) =>{res.send(result)});
    })
};