const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0
})


module.exports = connection