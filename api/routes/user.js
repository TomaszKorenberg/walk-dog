const userModel = require('../db/models/UserModel')
const jwt = require('jsonwebtoken')


module.exports = (app) => {
    app.post('/user/login', (req, res) => {
        userModel.checkUserByEmail(req.body.email)
            .then(res => console.log(res[0].password_salt === req.body.password))

        //3. Wygenerowanie tokena

    })

    app.post("/user/register", (req, res) =>{
        userModel
            .insertUser(req.body)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                console.log(result);
                res.send({status:"OK"});
            })
    });
}
