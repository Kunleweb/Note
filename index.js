const express = require('express')
const app = express()
const uniroute = require('./routes/route')
const userroute = require('./routes/userroutes')
const path = require('path')
const ejs = require('ejs')




app.use(express.json())

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

app.set('view engine', ejs);
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))



app.use('/api', uniroute)
app.use('/', userroute)


app.listen(3000, ()=>{
    console.log('listening to server on port 3000')
})

module.exports = app
