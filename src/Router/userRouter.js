const express = require('express')
const userRouter= express.Router()
const authenticationUtils= require('../Utils/authenticationUtils')
const userContrller= require('../Controller/userController')

function Test(req, res){
    console.log("listening")
    res.send("hello")
}

function registerUser(req, res){
    const { first_name, last_name, email, password } = req.body;
    if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
    }

    let token= authenticationUtils.createToken(first_name, email)
    res.send(token)

}

function login(req, res){
    userContrller.login(req, res)

}

userRouter.get('/',Test)
userRouter.post('/register',registerUser)
userRouter.post('/login',login)


module.exports= userRouter
