const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('seqlize', 'asmaa', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(console.log('connected successfully'))
  .catch((err) => console.log(err));

db.sync().then(() => console.log('data suncronised'));

module.exports = db;
