const mysql = require('mysql')
const fs = require('fs')
const Notes= fs.readFileSync('./notes.json', 'utf-8')
const notes = JSON.parse(Notes)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

connection.connect()





const importdata = (req, res) =>{
  notes.forEach(element=>{connection.query('INSERT INTO notes (id, title, note) VALUES (?,?,?)',
    [element.id, element.title, element.note],(err, result)=>{
        console.log(err)
      
    } )})

}



const deletedata =(req, res)=>{
connection.query('Drop Table notes', (err, result)=>{ 
  console.log(err)})}
  
 



if (process.argv[2] === '--import'){
  importdata()}
  else if(process.argv[2]=== '--delete'){
    deletedata()
  }


