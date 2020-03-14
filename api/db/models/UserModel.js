const connection = require("../connection.js");
const tableName = "users";

const insertUser = (userData,password) => {
    const sql = `
      INSERT INTO ${tableName}
      VALUES (
          DEFAULT, '${userData.email}', '${password}', '${userData.password}',
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
const checkByEmailIfUserExist = (email) =>{
    const sql =`
    SELECT id FROM ${tableName} WHERE email = '${email}';
    `;
    return connection.query(sql);
};

const checkUserPasswordByEmail = (email) => {
    const sql = `
    SELECT password_salt FROM ${tableName} WHERE email = '${email}';
    `;
    return connection.query(sql);
};


module.exports = {getUsers, getUser, checkUserPasswordByEmail, insertUser, checkByEmailIfUserExist};
