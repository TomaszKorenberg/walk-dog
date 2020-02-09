const connection = require("../connection.js");
const tableName = "walks";

const insertWalk = ({place, date, hour, dogName, description}) =>{
    const sql = `
    INSERT INTO ${tableName}
    VALUES (
        DEFAULT, 'miejsce', 'dd-mm-yyyy', 'hh:mm','imię psa', 'info'
    )
    `;
  return connection.query(sql); 
}

const getWalks = () => {WalksModel.js
    const sql = `
    SELECT * FROM ${tableName};
    `;
    return connection.query(sql).then((response) => response.rows);
};

const getWalk = (id) => {
    const sql = `
    SELECT * FROM ${tableName} WHERE id = ${id};
    `;
    return connection.query(sql).then((response) => response.rows);
};

module.exports = {insertWalk, getWalks, getWalk};