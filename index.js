const express = require('express')
const app = express()
const uniroute = require('./routes/route')
const userroute = require('./routes/userroutes')
const path = require('path')
const ejs = require('ejs')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')




app.use(express.json())
app.use(cookieParser());

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

app.set('view engine', ejs);
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "https://cdnjs.cloudflare.com"],
//       connectSrc: [
//         "'self'",
//         "http://127.0.0.1:3000", // allow localhost API/dev tools
//         "ws://127.0.0.1:3000",   // if you use WebSockets
//       ],
//     },
//   })
// );

app.use('/api', uniroute)
app.use('/users', userroute)


app.listen(3000, ()=>{
    console.log('listening to server on port 3000')
})

module.exports = app
