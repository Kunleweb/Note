const fs = require('fs')
const Users= fs.readFileSync('./users.json', 'utf-8')
const user = JSON.parse(Users)
const connection = require('./../db')







exports.getAlluser =  (req, res) => {
    connection.query('Select * FROM users', (err, result)=>{
         res.status(200).json({status:'success', data: result})

    })
   
    
    
}



exports.getUser = (req, res)=>{
    const userID = req.params.id*1
    connection.query(`Select * from users where id = ${userID}` ,
        (err, result)=>{
         res.status(200).json({status:'success', data: result})}

    )
}


exports.createUser = (req, res) =>{
    const { id,name, role } = req.body;
    connection.query(`insert into users values(?,?,?)`,[ id, name, role],
       (err, result)=>{
        res.status(200).json({status:'success', data:result})
       }

    )
}



// Update User

exports.updateUser = (req,res)=>{
    const {name, role } = req.body;
    const id = req.params.id
    connection.query(`Update users Set name =?, role =? where id= ?`,[name, role,id],
        (err, result)=>{res.status(200).json({status:'success', data:result})}
    )
}




exports.deleteUser = (req, res)=>{
    const id = req.params.id*1
    connection.query('delete from users where id = ?', [id],
        (err, result)=>{
            res.status(200).json({status:'success', data:result})
        }
    )
}
