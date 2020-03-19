const {insertComment, getAllCommentsByWalkId} = require('../db/models/CommentModel.js');
const {authenticationMiddleware} = require('../utils/token');



module.exports = (app) => {
    app.post('/comments', [authenticationMiddleware], function (req, res) {
        insertComment(req.body)
            .catch((err) => {
                res.status(400).send(err)
            }).then((result) => {
                res.send(result)
        })


    });

    app.get('/comments/:walkId', (req, res) => {

        getAllCommentsByWalkId(req.params.walkId)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                res.status(200).send(result.rows[0])
            })
    });

};