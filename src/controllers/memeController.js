let axios = require("axios")

const getAllMemes = async function(req,res){
    const options = {
        "method" : "get",
        "url" : "https://api.imgflip.com/get_memes"
    }

    const result = await axios(options)
    res.status(200).send({msg : result.data})
}

const captionImage = async function(req,res){
    const {template_id, text0, text1, username, password} = req.query
    const options = {
        "method" : "get",
        "url" : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }

    const result = await axios(options)
    res.status(200).send({msg : result.data})
}

module.exports.getAllMemes = getAllMemes
module.exports.captionImage = captionImage