import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const cnn = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const insert = (data, cb) => {
  var sql = `INSERT INTO user VALUES ('${data.id}', '${data.name}', '${data.email}', '${data.phoneNumber}', '${data.password}')`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(data.id);
  });
};

const select = (id, password, cb) => {
  var sql = `SELECT * FROM user WHERE id='${id}' limit 1 `;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows[0]);
  });
};

const get_user = (id, cb) => {
  var sql = `SELECT * FROM user WHERE id='${id}' limit 1`;

  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

const update = (data, cb) => {
  var sql = `UPDATE user SET name=${data.name}, email=${data.email}, phoneNumber=${data.phoneNumber}, password=${data.password}, id=${data.id}`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

const delect = (id, cb) => {
  var sql = `DELETE FROM user WHERE id='${id}'`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

export default { insert, select, get_user, update, delect };
