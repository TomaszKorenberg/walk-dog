const {authenticationMiddleware} = require('../utils/token');


module.exports = (app) => {
    app.get('/admin', [authenticationMiddleware], function (req, res) {
        try{
            res.send("OK")
        }
        catch(err){
            res.status(400).send(err)}
    });

};