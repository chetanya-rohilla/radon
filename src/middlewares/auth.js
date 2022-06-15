const jwt = require("jsonwebtoken");

const checkToken = function(req,res,next){
    let token = req.headers["x-auth-token"]
    if(!token)  return res.send({ status: false, msg: "Please pass a token" })

    const decodedToken = jwt.verify(token, "functionup-radon")
    if(!decodedToken) return res.send({ status: false, msg: "Invalid token" })

    if(decodedToken.userId !== req.params.userId)    return res.send("Trying to access data of different user")

    next()
}
module.exports.checkToken = checkToken