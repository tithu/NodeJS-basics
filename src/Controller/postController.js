const e = require('express');
const postService = require('../Service/postService')

const createPost = (req, res) => {

    const { text, author } = req.body;

    if (!(text && author)) {
        res.status(400).send("All input is required");
    }
    else {
        postService.createPost(req.body).then((result) => {
            if (result.post_id) {
                res.status(201).json(result)
            }
            else {
                res.status(502).send(result)
            }
        })
    }
};

const readPost = (req, res) => {

    const post_id = req.params.id
    if (!(post_id)) {
        res.status(400).send("All input is required");
    }
    else {

        postService.readPost(req.params.id).then((result) => {
            if (result) {
                res.status(201).json(result)
            }
            else {
                res.status(502).send(result)
            }
        })
    }
};

const updatePost = (req, res) => {
    const { text, author, post_id } = req.body;

    if (!(text && author && post_id)) {
        res.status(400).send("All input is required");
    }
    else {
        postService.updatePost(req.body).then((result) => {
            if (result.post_id) {
                res.status(201).json(result)
            }
            else {
                res.status(502).send(result)
            }
        })
    }
};

const deletePost = (req, res) => {

    const { author, post_id } = req.body;

    if (!(author && post_id)) {
        res.status(400).send("All input is required");
    }
    else {
        postService.deletePost(req.body).then((result) => {
            if (result.post_id) {
                res.status(201).json(result)
            }
            else {
                res.status(502).send(result)
            }
        })
    }
};

module.exports = { createPost, readPost, updatePost, deletePost }