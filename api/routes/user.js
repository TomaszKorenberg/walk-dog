const getUserByEmail = require('../db/models/UserModel')

module.exports = (app) => {
    app.post('/user/login', function (req, res) {
        //1. Select z bazy na podstawie emaila
        try{
            getUserByEmail.checkUserByEmail(req.body.email);
        } 
        catch(err) {
            alert(err)
        }
        
        //2. Porównanie hasła 
        //3. Wygenerowanie tokena 
        console.log(req.body);
        return res.send(req.body);
    });
}