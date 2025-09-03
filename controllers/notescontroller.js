const fs = require('fs')
const Notes= fs.readFileSync('./notes.json', 'utf-8')
const note = JSON.parse(Notes)
const connection = require('../db')



exports.getAllnotes =  (req, res) => {
    connection.query('Select * FROM notes', (err, result)=>{
         res.status(200).json({status:'success', data: result})

    })    
}



exports.getnote = (req, res)=>{
    const noteID = req.params.id*1
    connection.query(`Select * from notes where id = ${noteID}` ,
        (err, result)=>{
         res.status(200).json({status:'success', data: result})}

    )
}


exports.createNote = (req, res) =>{
    const {id, title, note} = req.body;
    connection.query(`insert into notes values(?,?,?)`,[ id, title, note],
       (err, result)=>{
        res.status(200).json({status:'success', data:result})
       }

    )
}



// Update User

exports.updateNote = (req,res)=>{
    const {title, note } = req.body;
    const id = req.params.id
    connection.query(`Update notes Set title =?, note =? where id= ?`,[title, note,id],
        (err, result)=>{res.status(200).json({status:'success', data:result})}
    )
}




exports.deleteNote = (req, res)=>{
    const id = req.params.id*1
    connection.query('delete from notes where id = ?', [id],
        (err, result)=>{
            res.status(200).json({status:'success', data:result})
        }
    )
}


exports.login = (req, res) =>{
    const {email, passkey } = req.body;
    if(!email || !passkey){
        res.status(400).json({status:'input email and passkey'})
    }
    connection.query('Select *  from users where email = ?, passkey = ?',
         [email, passkey], (err, result)=>{
        res.status(200).json({status:'login successful', data: result})
    })
}

