const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        console.log("token" + process.env.TOKEN_KEY)
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user= decoded
    } catch (err) {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return next();
};

const createToken = (first_name, email) => {

    console.log("token key ->" + process.env.TOKEN_KEY)
    const token = jwt.sign(
        { user_id: first_name, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    return token

}

module.exports = { verifyToken, createToken };