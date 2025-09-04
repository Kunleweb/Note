const express = require('express')
const usercontroller = require('./../controllers/usercontroller')

const route = express.Router()

// Get all users
route.post('/api/users/login', usercontroller.login)
route.get('/api/users/loginpage', usercontroller.loginpage) 



module.exports = route