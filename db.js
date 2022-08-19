const sequelize = require('sequelize')
const database = new sequelize('BOOK_TRACKER', 'sa', '123456', {
    dialect:'mssql',
    host:'localhost',
    port: 1433
})

// database.sync()

module.exports = database