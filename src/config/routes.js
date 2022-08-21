const express = require('express')
const controllerUsers = require('../controllers/UsersController')
const controllerBooksStatus = require('../controllers/BooksStatusController')
const controllerBooks = require('../controllers/BooksController')
const routes = express.Router()

routes.get('/login', controllerUsers.Login)

routes.get('/bookstatus', controllerBooksStatus.List)

routes.get('/listbooks', controllerBooks.ListBooks)

routes.post('/registration', controllerUsers.Register)

routes.post('/bookregistration', controllerBooks.RegisterBook)

routes.put('/bookupdatestatus', controllerBooks.UpdateBookStatus)

routes.put('/bookupdatenote', controllerBooks.UpdateBookNote)

routes.delete('/deletebook', controllerBooks.DeleteBook)

module.exports = routes