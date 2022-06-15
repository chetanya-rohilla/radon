const jwt = require("jsonwebtoken");

const userAuth = async function(req,res,next){
    let token = req.headers["x-auth-token"]
    const decodedToken = await jwt.verify(token, "functionup-radon")
    if(decodedToken.userId == req.params.userId)    next()
    else    return res.send("Trying to access data of different user")
}

module.exports.userAuth = userAuth