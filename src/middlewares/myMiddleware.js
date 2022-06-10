const moment = require('moment')

const logData= function ( req, res, next) {
    //console.log("\n")
    const a= moment().format('DD MM YYYY, h:mm:ss');
    const b = req.originalUrl
    const c = req.socket.remoteAddress

    console.log(a,b,c);

    next()
}

module.exports.logData = logData