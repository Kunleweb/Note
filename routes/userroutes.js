const express = require('express')
const usercontroller = require('./../controllers/usercontroller')

const route = express.Router()

// Get all users
route.post('/login', usercontroller.login)
route.get('/login', usercontroller.loginpage) 



module.exports = route