const sequelize = require('sequelize')
const ModelBooksStatus = require('../models/booksStatus')

module.exports = {
    async List(req, res) {
        try {
            const booksStatus = await ModelBooksStatus.findAll()
            console.log(booksStatus)
            return res.json(booksStatus)
        } catch (er) {
            return console.error("Error in the List: ", er)
        }
    }
}