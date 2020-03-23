const connection = require('../connection');
const tableName = 'comments';

const insertComment = (data) => {

    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
        '${data.data.nickname}',
        '${data.data.walkid}',
        '${data.data.comment}',
        '${data.data.date}'
    )
    `;
    return connection.query(sql)
};

const getAllCommentsByWalkId =(walkId) => {

    const sql = `
    SELECT * from ${tableName} WHERE walk_id = ${walkId}
    `;

    return connection.query(sql)
};


module.exports = {insertComment, getAllCommentsByWalkId};