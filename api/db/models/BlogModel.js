const connection = require('../connection');
const tableName = 'blog'

const insertBlog = (blogData) => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
       '${blogData.newsTitle}',
       '${blogData.newsArticle}',
       '${blogData.newsAuthor}'
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


const getBlog = (id) => {
    const sql = `
    SELECT * FROM ${tableName}
    WHERE id = ${id}
    `;

    return connection.query(sql).then((response) => response.rows.map(BlogModel));
};


const deleteBlog = (id) => {
    const sql = `
    DELETE FROM ${tableName}
    WHERE id = ${id.id}
    `;

    return connection.query(sql);
};

module.exports = {getBlog, getBlogs, insertBlog, deleteBlog};