const connection = require('../connection');
const tableName = 'pets'

const insertPet = (petData) => {
    const sql = `
    INSERT INTO ${tableName}
    VALUES(
        DEFAULT,
        '${petData.dogName}',
        '${petData.race}',
        '${petData.size}',
        '${petData.age}',
        12
    )
    `;

    return connection.query(sql)
};

const getPet =() => {
    const sql = `
    SELECT * from ${tableName}
    `;
    return connection.query(sql)
}

const getPetsByUser = () => {
    const sql = `
    SELECT * from ${tableName} where user_ID = '12'
    `;
    return connection.query(sql)
}

module.exports = {insertPet, getPet, getPetsByUser};