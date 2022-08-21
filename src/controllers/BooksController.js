const { DateTime } = require('mssql')
const sequelize = require('sequelize')
const ModelBooks = require('../models/books')

module.exports = {

    async ListBooks(req, res) {
        try {
            const books = await ModelBooks.findAll({where : {ADDED_BY_USER_ID: req.query.userId}})
            if(books.length !== 0)
                return res.json({books})
            else
                return res.json({error: "You do not have any registered book", status: 500})        
            
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    },

    async RegisterBook(req, res) {
        try {
            const bookExists = await ModelBooks.findOne({ where : {TITLE: req.body.data.bookTitle, AUTHOR: req.body.data.bookAuthor}})
            if(bookExists)
                return res.json({error: "Book already exists", status: 500})
            else{
                if(req.body.data.bookNote && req.body.data.bookStatusId !== '3'){
                    return res.json({error: "The status must be 'Read' to insert a Note", status: 500})
                }
                let date = Date.now()
                const book = await ModelBooks.create({
                    ADDED_BY_USER_ID: req.body.data.bookAddedByUserId,
                    TITLE: req.body.data.bookTitle,
                    AUTHOR: req.body.data.bookAuthor,
                    DATE_ADDED_TO_LIST: date,
                    DUE_DATE: req.body.data.bookDueDate,
                    NOTE: req.body.data.bookNote !== null ? req.body.data.bookNote : null,
                    STATUS_ID: req.body.data.bookStatusId
                })
                return res.json({error: "", status: 201})
            }
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    },

    async UpdateBookStatus(req, res) {
        try {
            const book = await ModelBooks.findByPk(req.body.data.bookId)
            if(book){
                book.STATUS_ID = req.body.data.bookStatusId
                await book.save()
            }
            return res.json({error: "", status: 201})

        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    },

    async UpdateBookNote(req, res) {
        try {
            const book = await ModelBooks.findByPk(req.body.data.bookId)
            if(req.body.data.bookNote && book.STATUS_ID !== 3)
                return res.json({error: "The status must be 'Read' to insert a Note", status: 500})

            if(book){
                book.NOTE = req.body.data.bookNote
                await book.save()
                return res.json({error: "", status: 201})
            }
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    },

    async DeleteBook(req, res) {
        try {
            console.log(req.body.bookId)
            const book = await ModelBooks.findByPk(req.body.bookId)
            await book.destroy()
            return res.json({error: "", status: 201})
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    }
}