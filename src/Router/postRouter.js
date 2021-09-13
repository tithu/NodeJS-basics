const express = require('express')
const postRouter= express.Router()
const postController= require('../Controller/postController')
const auth= require('../Utils/authenticationUtils')

function createPost(req, res){
    postController.createPost(req, res)

}

function readPost(req, res){
    console.log("reading post")
    postController.readPost(req, res)

}

function updatePost(req, res){
    console.log("update post")
    postController.updatePost(req, res)

}

function deletePost(req, res){
    postController.deletePost(req, res)

}

postRouter.post('/create',auth.verifyToken, createPost)
postRouter.get('/read/:id',auth.verifyToken, readPost)
postRouter.post('/update',auth.verifyToken, updatePost)
postRouter.post('/delete',auth.verifyToken, deletePost)


module.exports= postRouter
