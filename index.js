const express = require('express')
const app = express()
const uniroute = require('./routes/route')




app.use(express.json())

app.use('/api', uniroute)


app.listen(3000, ()=>{
    console.log('listening to server on port 3000')
})

module.exports = app
