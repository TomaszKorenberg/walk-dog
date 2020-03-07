const jwt = require('jsonwebtoken');
const config = require('../config.json');


const createToken = (payload, callback) => jwt
    .sign(payload, config.JWT.jwt_secret, {algorithm: 'HS256', expiresIn: config.JWT.token_time}, callback);


const authenticationMiddleware = (req, res, next) => {
    verifyToken(req.headers.token, (data) => {
        if (data) {
            req.user = data; 

            next();
        } else {
            res.status(401).send("Wrong token!")
        }
    })


};

const verifyToken = (token, cb) => {
    jwt.verify(token, config.JWT.jwt_secret, function (err, data) {
        if (err) {
            console.log(err.message);
            return cb(false)
        } else {
            return cb(data)
        }
    })
};

const decodeToken = (token) => {
    return jwt.decode(token)
};

module.exports = {
    createToken,
    authenticationMiddleware,
    verifyToken,
    decodeToken
};
