const jwt = require('jsonwebtoken');
const config = require('../config.json');


const createToken = (payload, callback) => jwt
    .sign(payload, config.JWT.jwt_secret, {algorithm: 'HS256'}, callback);


const authenticationMiddleware = (req, res, next) => {
    verifyToken(req.headers.token, (isValid) => {
        if (isValid === true) {
            next()
        } else {
            res.status(401).send("Wrong token!")
        }
    })


};

const verifyToken = (token, cb) => {
    jwt.verify(token, config.JWT.jwt_secret, function (err) {
        if (err) {
            console.log(err.message);
            return cb(false)
        } else {
            console.log("Token is valid");
            return cb(true)
        }
    })
};

module.exports = {
    createToken,
    authenticationMiddleware,
    verifyToken
};
