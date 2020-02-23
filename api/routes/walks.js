const {insertWalk} = require('../db/models/WalksModel.js');
const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.post('/walks', [authenticationMiddleware], function (req, res) {
        insertWalk(req.body)
            .catch(err =>res.status(400).send(error))
            .then(walk =>{
                console.log(walk);
                res.json(walk)
                res.send({status:"ok"})});

    });
}


// app.post("/user/register", (req, res) => {
//     userModel
//         .insertUser(req.body)
//         .catch(err => res.status(400).send(err))
//         .then((result) => {
//             console.log(result);
//             res.send({status: "OK"});
//         })
// });
