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
// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err
//     console.log('The solution is: ', rows[0].solution)
// })



// const e = user.forEach(element => {
//   connection.query(
//     'INSERT INTO users (id, name, role) VALUES (?, ?, ?)',
//     [element.id, element.name, element.role],
//     (err, result) => {
//       if (err) throw err;
//       console.log('Inserted:', result.insertId);
//     }
//   );
// })

const importdata = (req, res) =>{
  user.forEach(element=>{connection.query('INSERT INTO users (id, name, role, email, passkey) VALUES (?, ?, ?,?,?)',
    [element.id, element.name, element.role, element.email, element.passkey],(err, result)=>{
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


