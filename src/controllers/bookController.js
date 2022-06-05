const BookModel = require('../models/bookModel')

const getBook = async function(req,res){
    let data = await BookModel.find()
    res.send({ msg : data })
}

const createBook = async function(req,res){
    let data = req.body
    let createdBook = await BookModel.create(data)
    res.send({ msg : createdBook })
}

module.exports.createBook = createBook
module.exports.getBook = getBook