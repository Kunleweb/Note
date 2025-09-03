const express = require('express')
const notescontroller = require('../controllers/notescontroller')
const usercontroller = require('./../controllers/usercontroller')

const route = express.Router()

// Get all users
route.get('/notes', notescontroller.getAllnotes)
route.get('/notes/:id', notescontroller.getnote)
route.post('/notes/addnote', notescontroller.createNote)
route.patch('/notes/updatenote/:id', notescontroller.updateNote)
route.delete('/notes/deletenote/:id', notescontroller.deleteNote)
route.post('/users/login', usercontroller.login)

module.exports = route