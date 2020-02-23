const connection = require('../connection');
const tableName = 'Post'

const PostModel = (row) => ({
    id: row.id,
    message: row.message,
    latitude: row.latitude,
    longitude: row.longitude,
    date: row.date
});

getPost = (userId) => {
    const sql = `
    SELECT * FROM ${tableName}
    WHERE 
    user1_ID = ${userId}
    OR 
    user2_ID = ${userId}
    `;

    return connection.query(sql).then((response) => response.rows.map(PostModel));
};



const insertPost = () => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
       'Wspólne wyprowadzanie psa z  ',
       '52.237049',
       '21.017532',
       1,
       2,
       '2020-12-31',
    )
    `;

    return connection.query(sql)
};


module.exports = {getPost};
