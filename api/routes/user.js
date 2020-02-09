module.exports = (app) => {
    app.post('/user/login', function (req, res) {
        console.log(req.body)
        return res.send('asd')
    });
}