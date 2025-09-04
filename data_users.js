const mysql = require('mysql')
const fs = require('fs')
const Users= fs.readFileSync('./users.json', 'utf-8')
const user = JSON.parse(Users)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

connection.connect()





const importdata = (req, res) =>{
  user.forEach(element=>{connection.query('INSERT INTO users (id, email, password) VALUES (?,?,?)',
    [element.id, element.email, element.password],(err, result)=>{
        console.log(err)
      
    } )})

}



const deletedata =(req, res)=>{
connection.query('Drop Table users', (err, result)=>{ 
  console.log(err)})}
  
 



if (process.argv[2] === '--import'){
  importdata()}
  else if(process.argv[2]=== '--delete'){
    deletedata()
  }


