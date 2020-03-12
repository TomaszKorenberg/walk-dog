const userModel = require('../db/models/UserModel');
const token = require('../utils/token');
const bcrypt = require("bcrypt");

module.exports = (app) => {

    app.get("/user", (req, res) => {
        const decoded = token.decodeToken(req.headers.token);
        res.send(decoded);
        res.status(200);

    });

    app.post('/user/login', async (req, res) => {

        userModel.checkByEmailIfUserExist(req.body.email)
            .catch((err) => {
                console.log(err)
            })
            .then(result => {
                if (result.rowCount === 0) {
                    res.status(207).send()
                } else {
                    userModel.checkUserPasswordByEmail(req.body.email)
                        .catch((err) => {
                            console.log(err)
                        })
                        .then(result => {
                            if (bcrypt.compare(result.rows[0].password_salt, req.body.password)) {
                                const jwtSignCallback = function (err, token) {
                                    if (err) {
                                        res.status(401).send();
                                        console.log(err)
                                    } else {
                                        res.send({token: token});
                                        res.status(200);
                                    }
                                };
                                token.createToken({
                                    user: req.body.email,
                                }, jwtSignCallback)
                            } else {
                                res.status(204).send();
                            }
                        });
                }
            });
    });

    app.post("/user/register", (req, res) => {
        userModel.checkByEmailIfUserExist(req.body.email)
            .catch((err) => {
                console.log(err)
            })
            .then(result => {
                if (result.rowCount === 0) {
                    userModel
                        .insertUser(req.body)
                        .catch(err => res.status(400).send(err))
                        .then(() => {
                            res.send({status: "OK"});
                        })
                } else {
                    res.status(207).send()
                }
            });
    })
};

