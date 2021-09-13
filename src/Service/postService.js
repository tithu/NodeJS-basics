const { ObjectId } = require("bson")
const postDao = require("../Dao/postServiceDao")
const userDao = require("../Dao/userServiceDao")

const createPost = async (payload) => {

    const post_id = ObjectId().toString()
    console.log(post_id)
    payload.post_id = post_id
    payload.post_date = new Date().toISOString()
    payload.last_updated = new Date().toISOString()

    const countOfChar = (payload.text.match(/is/g) || []).length
    console.log("counts of character-->" + countOfChar)

    if (countOfChar >= 255) {
        return { "error": "characters more than 255" }
    }

    const user = await userDao.getUser(payload.author)
    if (user.length < 1 || !user[0].isAdmin) {
        return { "error": "Author is not admin" }
    }

    const result = await postDao.createPost(payload)
    console.log("add userfrom db-->" + JSON.stringify(result))

    if (result.acknowledged) {
        return payload
    }
    else {
        return { "error": "insertion failed" }
    }


}

const readPost = async (payload) => {

    try {
        const result = await postDao.readPost(payload)
        console.log("read post db-->" + JSON.stringify(result))
        return result
    } catch (err) {
        return { "error": "read failed" }
    }





}

const updatePost = async (payload) => {

    const countOfChar = (payload.text.match(/is/g) || []).length
    console.log("counts of character-->" + countOfChar)

    if (countOfChar >= 255) {
        return { "error": "characters more than 255" }
    }

    const user = await userDao.getUser(payload.author)
    if (user.length < 1 || !user[0].isAdmin) {
        return { "error": "Author is not admin" }
    }

    payload.last_updated = new Date().toISOString()

    const result = await postDao.updatePost(payload)
    console.log("update post db-->" + JSON.stringify(result))

    if (result.acknowledged) {
        return payload
    }
    else {
        return { "error": "update failed" }
    }


}

const deletePost = async (payload) => {

    const user = await userDao.getUser(payload.author)
    if (user.length < 1 || !user[0].isAdmin) {
        return { "error": "Author is not admin" }
    }


    const result = await postDao.deletePost(payload)
    console.log("delete post db-->" + JSON.stringify(result))

    if (result.acknowledged) {
        return { "status": "post deleted with post id" + payload.post_id }
    }
    else {
        return { "error": "insertion failed" }
    }


}
module.exports = { createPost, readPost, updatePost, deletePost }