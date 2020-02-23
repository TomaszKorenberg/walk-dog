const connection = require("../connection.js");
const tableName = "walks";

const insertWalk = (walkData) =>{
    const sql = `
    INSERT INTO ${tableName}
    VALUES (
        DEFAULT, '${walkData.place}', '${walkData.date}', '${walkData.hour}','${walkData.dogName}', '${walkData.description}', 4
    )
    `;
    console.log(sql)

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
