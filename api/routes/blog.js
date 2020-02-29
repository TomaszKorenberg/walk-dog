const {insertBlog, getBlogs} = require('../db/models/BlogModel.js');

module.exports = (app) => {
    app.post('/blog', function (req, res) {
        
            insertBlog(req.body)
                .catch((err) => {
                    res.status(400).send(err)

                }).then((result) => {
                    res.json(result.rows)
                })
        
                     
    });
   
    app.get('/blog', (req, res) => {
        getBlogs()
            .catch(err =>res.status(400).send(err))
            .then((result) =>{res.send(result)});            
    });    
} 