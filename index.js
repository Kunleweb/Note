const express = require('express')
const app = express()
const uniroute = require('./routes/route')
const path = require('path')




app.use(express.json())


app.use(express.static(path.join(__dirname, 'views')))



app.use('/api', uniroute)


app.listen(3000, ()=>{
    console.log('listening to server on port 3000')
})

module.exports = app
