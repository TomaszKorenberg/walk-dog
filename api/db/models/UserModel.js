const connection = require("../connection.js");
const tableName = "users";

const insertUser = (userData) => {
    const sql = `
      INSERT INTO ${tableName}
      VALUES (
          DEFAULT, '${userData.email}', '${userData.password}', '${userData.password}',
           '${userData.name}', '${userData.surname}'
      )
      `;
    return connection.query(sql);
};

const getUsers = () => {
    const sql = `
    SELECT * FROM ${tableName};
    `;
    return connection.query(sql).then((response) => response.rows);
};

const getUser = (id) => {
    const sql = `
    SELECT * FROM ${tableName} WHERE id = ${id};
    `;
    return connection.query(sql).then((response) => response.rows);
};

const checkUserByEmail = (email) => {
    console.log(email+" testowy");
    const sql = `
    SELECT password_salt FROM ${tableName} WHERE email = '${email}';
    `;
    return connection.query(sql);
};


module.exports = {getUsers, getUser, checkUserByEmail, insertUser};
