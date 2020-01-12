const connection = require('../connection');
const tableName = 'user'

const insertUser = () => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
        'Pauwan@o2.pl',
        'salt2134234',
        'hash323874239',
        'Pau',
        'Wan',
        'Polska',
        'Warsaw',
        '00-001',
        null,
        'Polna',
        '2',
        '23',
        POINT(52.3, 33.3),
        'Fem'
    )
    `;

    return connection.query(sql)
};

const getUsers = () => {
    const sql = `
    SELECT * FROM ${tableName};
    
    `;
    return connection.query(sql)

};

getUsers().then((res) => console.log(res.rows)
);