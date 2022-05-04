const express = require('express')
const { SignUp, SignIn, GetUsers, GetOneUser, DeleteUser } = require('../Controllers/User');
const { isAuth } = require('../Midlewares/isAuth');
const { registervalidation, Validation, loginvalidation } = require('../Midlewares/RegisterValidator');


const userRouter = express.Router()


userRouter.post('/SignUp',registervalidation,Validation,SignUp)

userRouter.post('/SignIn',loginvalidation,Validation,SignIn)

userRouter.get('/GetUser',isAuth,(req,res)=>res.send(req.user))

userRouter.get('/GetUsers',GetUsers)

userRouter.get('/GetOneUser/:id',GetOneUser)

userRouter.delete('/DeleteUser/:id',DeleteUser)

module.exports = userRouter