const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

connection.connect()


const schema =  (req,res)=>{
    connection.query('CREATE TABLE notes(id INT PRIMARY KEY AUTO_INCREMENT,title VARCHAR(100),note VARCHAR(1000000));', 
        (err, result)=>{
            console.log(err)
        }
    )
}


if(process.argv[2]=== '--create'){
    schema()
}