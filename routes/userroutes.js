const express = require('express')
const fs = require('fs')
const app = express()
const Users= fs.readFileSync('./users.json', 'utf-8')
const user = JSON.parse(Users)

const route = express.Router()

// Get all users
route.get('/users', (req,res)=>{
    res.status(200).json({status:'success', data: user})
})

// Get User
route.get('/users/:id', (req,res)=>{
    try{const userID = req.params.id*1;
    const userfilter = user.filter((el)=>el.id === userID)
    res.status(200).json({status:'success', data: userfilter})}catch(err)
    {res.status(400).json({status:'error', message:err.message})}
})


// Create
route.post('/users/adduser', (req,res)=>{
    
   try{const newid = user[user.length-1].id+1
    const newUserObj = Object.assign({id:newid}, req.body);
    user.push(newUserObj);
    fs.writeFile('./users.json', JSON.stringify(user), (err)=>{
        res.status(200).json({status:'success', data:{user:newUserObj}})
    })}catch(err){res.status(401).json({status:'error', message: err.message})}


})

// Update User

route.patch('/users/updateuser/:id', (req,res)=>{
    const userID = req.params.id * 1
    const userfilter = user.find((el)=>el.id === userID)
    const edituser = Object.assign(userfilter, req.body)
    fs.writeFile('./users.json', JSON.stringify(user), (err)=>{
        res.status(200).json({status:'success', data:{user:edituser}})
    })
})


route.delete('/users/deleteuser/:id', (req,res)=>{
    const userID = req.params.id * 1
    user.splice(user.findIndex(el=>el.id===userID),1);
    res.status(200).json({status: 'deleted'})



})


module.exports = route