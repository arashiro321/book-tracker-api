const sequelize = require('sequelize');
const database = require('../../db');
const schema = ''

class Users extends sequelize.Model { }

Users.init(
    {
        USER_ID:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        EMAIL:{
            type: sequelize.STRING,
            allowNull: false
        },
        PASSWORD:{
            type: sequelize.STRING,
            allowNull: false
        } 
    },
    {
        sequelize : database, modelName: 'USERS', schema, freezeTableName : true, timestamps: false
    }
)

module.exports = Users