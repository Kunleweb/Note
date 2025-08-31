const express = require('express')
const usercontroller = require('./../controllers/usercontroller')

const route = express.Router()

// Get all users
route.get('/users', usercontroller.getAlluser)
route.get('/users/:id', usercontroller.getUser)
route.post('/users/adduser', usercontroller.createUser)
route.patch('/users/updateuser/:id', usercontroller.updateUser)
route.delete('/users/deleteuser/:id', usercontroller.deleteUser)


module.exports = route