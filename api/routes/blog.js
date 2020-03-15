const {insertBlog, getBlogs, getBlog, deleteBlog} = require('../db/models/BlogModel.js');

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
            .catch(err => res.status(400).send(err))
            .then((result) => {
                res.send(result)
            });
    });

    app.get('/blog/:articleId', (req, res) => {
        getBlog(req.params.articleId)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                res.send(result)
            });
    });

    app.delete('/blog', function (req, res) {
        delete deleteBlog(req.body)
            .catch((err) => {
                res.status(400).send(err)

            }).then((result) => {
                res.status(200)
            })


    });
};