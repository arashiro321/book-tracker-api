const sequelize = require('sequelize')
const database = require('../../db')
const schema = 'dbo'

class BooksStatus extends sequelize.Model{}

BooksStatus.init(
    {
        STATUS_ID:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        STATUS_NAME:{
            type: sequelize.STRING,
            allowNull: true
        }
    },
    {
        sequelize : database, modelName: 'BOOKS_STATUS', schema, freezeTableName : true, timestamps: false
    }
)

module.exports = BooksStatus