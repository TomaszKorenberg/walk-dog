const userModel = require('../db/models/UserModel');
const token = require('../utils/token');
const bcrypt = require("bcrypt-nodejs");

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

                            bcrypt.compare(req.body.password, result.rows[0].password_hash, function (err, isMatch) {
                                if (isMatch) {
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
                                        nickname: result.rows[0].nickname,
                                        user_id: result.rows[0].id
                                    }, jwtSignCallback)
                                } else {
                                    res.status(204).send();
                                }
                            });
                        })
                }
            });
    });

    app.post("/user/register", async (req, res) => {
        const saltRounds = 10;
        userModel.checkByEmailIfUserExist(req.body.email)
            .catch((err) => {
                console.log(err)
            });
        bcrypt.genSalt(saltRounds, async function (err, salt) {
            if (err) {
                throw err
            } else {
                bcrypt.hash(req.body.password, salt, null, async function (err, hash) {
                    if (err) {
                        throw err
                    } else {
                        req.body.salt = hash;
                        req.body.password = hash;
                        userModel
                            .insertUser(req.body)
                            .catch(err => res.status(400).send(err))
                        /* .then(() => {
                             res.send({status: "OK"});*/

                    }
                })
            }
        })
    })
};