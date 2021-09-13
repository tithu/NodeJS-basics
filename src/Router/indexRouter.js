const express = require('express')
const router= express.Router()
const userRouter= require('./userRouter')
const postRouter= require('./postRouter')


router.use('/user',userRouter)
router.use('/post',postRouter)

module.exports =router