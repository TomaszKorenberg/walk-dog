const connection = require('../connection');
const tableName = 'blog'

const insertBlog = () => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
       'Jak wyprowadzać psa na spacer? ',
       'Wbrew pozorom pytanie nie jest takie oczywiste. Nie każdy pies lubi długie spacery, deszcz czy towarzystwo innych psów.',
       'GalAnonim',
    )
    `;

    return connection.query(sql)
};

const BlogModel = (row) => ({
    id: row.id, 
    header: row.header,
    article: row.article,
    author: row.author
}); 


const getBlogs = () => {
    const sql = `
    SELECT * FROM ${tableName}
    `;
    return connection.query(sql).then((response) =>
    response.rows.map(BlogModel)
    );
};

//getBlog().then((results) => result[0])

const getBlog = (id) => {
    const sql = `
    SELECT * FROM ${tableName}
    WHERE id = ${id}
    `;

    return connection.query(sql).then((response) => response.rows.map(BlogModel));
};

getBlog(1).then((response) => console.log(response));

module.exports = {getBlog, getBlogs};