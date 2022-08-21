const sequelize = require('sequelize')
const ModelBooksStatus = require('../models/booksStatus')

module.exports = {
    async List(req, res) {
        try {
            const booksStatus = await ModelBooksStatus.findAll()
            console.log(JSON.stringify(booksStatus))
            if(booksStatus.length !== 0)
            return res.json({booksStatus})
        else
            return res.json({error: "You do not have any book status registered", status: 500})        
        
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    }
}