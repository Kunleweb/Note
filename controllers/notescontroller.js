const fs = require('fs')
const Notes= fs.readFileSync('./notes.json', 'utf-8')
const note = JSON.parse(Notes)
const connection = require('../db')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const { sign } = require('crypto')
// exports.getAllnotes =  (req, res) => {
//     const allnotes = connection.query('Select note FROM notes', (err, result)=>{
//          res.status(200).render('overview.ejs')
//     })    
// }

app.use(cookieParser(), function(req, res, next) {
    let token = req.cookies.jwt;
    if (token && verify(token)) {
        next();
    } else {
        res.redirect('/users/login');
    }
});

exports.getAllnotes = (req, res) => { 
    connection.query('SELECT * FROM notes', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

        // Pass the results to the EJS template
        res.status(200).render('overview.ejs', { allnotes: results });
    });
};






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




