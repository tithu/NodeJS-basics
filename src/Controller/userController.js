const { use } = require('../Router/userRouter');
const userService= require('../Service/userService')

const login = (req, res) => {

    const {email, password } = req.body;

    if(!(email &&  password)){
        res.status(400).send("All input is required");
    }

    userService.login(req.body).then((result)=>{
        if(result.token){
            res.status(200).json(result)
        }
        else{
            res.status(400).send("Invalid Credentials")
        }
    })
};

module.exports={login}