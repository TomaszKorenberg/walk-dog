const connection = require('../connection');
const tableName = 'pets'

const insertPet = () => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
        'Reksio',
        'Pudel',
        'Small',
        '1',
        DEFAULT
    )
    `;

    return connection.query(sql)
};

insertPet();