const jwt = require('jsonwebtoken');


const createToken = (payload, callback) => jwt
    .sign(payload, "12345", {algorithm: 'HS256'}, callback);


const authenticationMiddleware = (req, res, next) => {
    next();
};

const verifyToken = (token) => {

};

// const requireAuthentication = (req, res, next) => {
//     const token = req.headers['Token'];
//     jwt.decode(token); // verify
//
//     // if valid -> getUser -> req.user = user -> next()
//
// };



module.exports = {
    createToken,
    authenticationMiddleware,
    verifyToken
};
