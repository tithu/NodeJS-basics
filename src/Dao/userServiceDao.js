const DatabaseUtils= require('../Utils/databaseUtils')


const loginUser= (payload)=>{


}

const getUser= async (email)=>{
    let db= await DatabaseUtils.getDBConnection()
    let result= await db.collection('user').find({'email':email}).toArray()

    return result
}

module.exports= {getUser}