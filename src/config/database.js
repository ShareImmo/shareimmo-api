const { Sequelize } = require('sequelize');
const UserModel = require('../models/user');

const sequelize = new Sequelize("shareimmo","root", "123456", {
    host: "mysqldb" || "localhost",
	port: 3306,
    dialect: 'mysql'
});

const User = UserModel(sequelize);

sequelize.sync({
})
    .then(() => {
        console.log('Models synced with database');
    })
    .catch(err => {
        console.log('An error occurred:', err);
    });

module.exports = {
  User,
  sequelize,
};
