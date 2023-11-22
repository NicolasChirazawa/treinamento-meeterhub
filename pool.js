const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: '31.170.160.103',
  user: 'u226780189_Meeter',
  password: 'Meeterhub2023',
  database: 'u226780189_Meeter'
});

module.exports = pool;

/*
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bancodadosteste', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const authenticate = async () => {
  return await sequelize.authenticate();
};

module.exports = sequelize;
*/