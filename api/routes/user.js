const userModel = require('../db/models/UserModel')

module.exports = (app) => {
    app.post('/user/login', function (req, res) {
        //1. Select z bazy na podstawie emaila
        try{
            userModel.checkUserByEmail(req.body.email);
        } 
        catch(err) {
            alert(err)
        }
        
        //2. Porównanie hasła 
        //3. Wygenerowanie tokena 
        console.log(req.body);
        return res.send(req.body);
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