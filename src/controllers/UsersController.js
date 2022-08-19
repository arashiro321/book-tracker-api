const sequelize = require('sequelize')
const ModelUsers = require('../models/users')

module.exports = {

    async Login(req, res) {
        try {
            const user = await ModelUsers.findOne({ where : {EMAIL: req.query.userEmail}})

            if(user){
                if(user.PASSWORD === req.query.userPassword)
                    return res.json({error: "User Logged successfully", status: 201, userObj: user})
                else
                    return res.json({error: "Wrong password", status: 500})
            }else{
                return res.json({error: "Email does not exists", status: 500})
            }
            
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    },

    async Register(req, res) {
        try {
            const userExists = await ModelUsers.findOne({ where : {EMAIL: req.body.data.userEmail}})
            if(userExists)
                return res.json({error: "Email already exists", status: 500})
            else{
                const user = await ModelUsers.create({
                    EMAIL: req.body.data.userEmail,
                    PASSWORD: req.body.data.userPassword
                })
                return res.json({error: "User created successfully", status: 201})
            }
        } catch (er) {
            return res.json({error: "An error occurred while creating the account: " + er, status: 500})
        }
    }
}