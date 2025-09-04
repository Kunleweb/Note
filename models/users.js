const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

connection.connect()


const schema =  (req,res)=>{
    connection.query('CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(100),password VARCHAR(12));', 
        (err, result)=>{
            console.log(err)
        }
    )
}


if(process.argv[2]=== '--create'){
    schema()
}