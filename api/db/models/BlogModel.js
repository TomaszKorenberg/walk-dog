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

insertBlog();

