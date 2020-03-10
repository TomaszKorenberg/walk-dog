const {insertPet, getPet, getPetsByUser} = require('../db/models/PetsModel.js');
const {authenticationMiddleware} = require('../utils/token');
const {checkByEmailIfUserExist} = require("../db/models/UserModel");

module.exports = (app) => {
    app.post('/pets', [authenticationMiddleware], function (req, res) {
        console.log(req.body)

        checkByEmailIfUserExist(req.body.userInfo.user)
            .catch(err => {
                console.log(err);
                res.status(400).send(err)
            })
            .then(result => {
                insertPet(req.body, result.rows[0].id)
                    .catch(err => {
                        console.log(err);
                        res.status(400).send(err)
                    })
                    .then((result) => {
                        res.status(200).send()
                    });
            })
    });

    app.get('/pets', [authenticationMiddleware], (req, res) => {

        checkByEmailIfUserExist(req.user.user)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                    getPetsByUser(result.rows[0].id)
                        .catch(err => res.status(400).send(err))
                        .then(result => {
                            res.send(result.rows)});
                }
            )
    });
};