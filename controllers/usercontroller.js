const fs = require('fs')
const express = require('express')
const app = express()
const Notes= fs.readFileSync('./notes.json', 'utf-8')
const note = JSON.parse(Notes)
const connection = require('../db')
const jwt = require('jsonwebtoken')
const { sign } = require('crypto')
const { promisify } = require('util')


const signtoken = id =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN})
}


const createSendToken = (user, statusCode, res) => {
  const token = signtoken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: 'none',
secure: false

  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};




exports.protect = (req, res)=>{
    let token = req.cookies.jwt
    if(token){res.redirect('/api/notes/')}
    else{
      res.redirect('/users/login')
    }    
}






exports.login = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ status: 'input email and password' });
    }

    connection.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, result) => {
            if (err) {
                return res.status(500).json({ status: 'error', message: err.message });
            }

            if (!result || result.length === 0) {
                return res.status(401).json({ status: 'Invalid credentials' });
            }

            const user = result[0];

            createSendToken(user, 200, res);
        }
    );
};



exports.loginpage = (req,res)=>{
    res.status(200).render('login.ejs')
}