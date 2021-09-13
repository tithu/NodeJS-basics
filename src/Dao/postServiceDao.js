const DatabaseUtils= require('../Utils/databaseUtils')




const createPost= async (payload)=>{

    let db= await DatabaseUtils.getDBConnection()
    let result= await db.collection('post').insertOne(payload)
    
    return result
}

const readPost= async (payload)=>{
    let db= await DatabaseUtils.getDBConnection()
    let result= await db.collection('post').findOne({post_id:payload})
    
    return result
}

const updatePost= async (payload)=>{
    let db= await DatabaseUtils.getDBConnection()
    let result= await db.collection('post').updateOne({post_id:payload.post_id}, {$set:{text:payload.text}})
    
    return result
}

const deletePost= async (payload)=>{
    let db= await DatabaseUtils.getDBConnection()
    let result= await db.collection('post').deleteOne({post_id: payload.post_id})
    
    return result
}

module.exports= {createPost, readPost, updatePost, deletePost}