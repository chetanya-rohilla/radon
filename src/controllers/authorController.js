const AuthorModel = require('../models/authorModel')

const createAuthor = async function(req,res){
    const createdAuthor = await AuthorModel.create(req.body)
    res.send(createdAuthor)
}

module.exports.createAuthor = createAuthor