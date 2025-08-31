const express = require('express')
const app = express()
const userroute = require('./routes/userroutes')




app.use(express.json())

app.use('/api', userroute)


app.listen(3000, ()=>{
    console.log('listening to server on port 3000')
})

module.exports = {app, connection}
