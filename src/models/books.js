const sequelize = require('sequelize');
const database = require('../../db');
const schema = ''

class Books extends sequelize.Model { }

Books.init(
    {
        BOOK_ID:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ADDED_BY_USER_ID:{
            type: sequelize.INTEGER,
            allowNull: false
        },
        TITLE:{
            type: sequelize.STRING,
            allowNull: false
        },
        AUTHOR:{
            type: sequelize.STRING,
            allowNull: false
        },
        DATE_ADDED_TO_LIST:{
            type: sequelize.DATE,
            allowNull: false
        },
        DUE_DATE:{
            type: sequelize.DATE,
            allowNull: false
        },
        NOTE:{
            type: sequelize.INTEGER,
            allowNull: true
        },
        STATUS_ID:{
            type: sequelize.STRING,
            allowNull: false
        } 
    },
    {
        sequelize : database, modelName: 'BOOKS', schema, freezeTableName : true, timestamps: false
    }
)

module.exports = Books