const { Sequelize } = require("sequelize");
const db = require("../config/db.config.js");

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bDay: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
module.exports = Users;