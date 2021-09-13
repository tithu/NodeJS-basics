const userDao= require("../Dao/userServiceDao")
const authenticationUtils= require('../Utils/authenticationUtils')

const login = async (payload) => {
    const {email, password}= payload

    const user= await userDao.getUser(email)
    console.log("user from db-->" + JSON.stringify)
    if(user.length>0 && user[0].password==password){
        let token= authenticationUtils.createToken(user[0].first_name, email)
        return {"token": token}
    }
    else{
        return {}
    }

    
}

module.exports={login}