const fs = require('fs')
const Notes= fs.readFileSync('./notes.json', 'utf-8')
const note = JSON.parse(Notes)
const connection = require('../db')



exports.login = (req, res, next) =>{
    // Check if user input password or email
    const {email, password } = req.body;
    if(!email || !password){
       return res.status(400).json({status:'input email and password'})
    }
    // Check if email matches db 
    connection.query('Select * from users where email = ? AND password = ?',
         [email, password], (err, result)=>{
        if(err){ return res.status(500).json({status:'error', message: err.message})};
        if(result.length == 0){
            return res.status(401).json({status: 'Invalid credentials'})
        }
        res.status(200).json({status:'login successful', data: result})
    })
}




exports.loginpage = (req,res)=>{
    res.status(200).render('login.ejs')
}