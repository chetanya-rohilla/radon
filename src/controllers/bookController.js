const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/authorModel')
const PublisherModel = require('../models/publisherModel')

const createBook = async function(req,res){

    let data = req.body
    if(data.author){
        const check = await AuthorModel.findById(data.author)
        if(check){
            if(data.publisher){
                const check = await PublisherModel.findById(data.publisher)
                if(check){
                    let createdBook = await BookModel.create(data)
                    res.send({msg : createdBook})
                }else    res.send("Please enter correct publisher id")
        
            }else   res.send("Please enter publisher id")
        }else    res.send("Please enter correct author id")

    }else   res.send("Please enter author id")
}

const getBooks = async function(req,res){

    let allBooks = await BookModel.find().populate(['author', 'publisher'])
    res.send(allBooks)
}


module.exports.createBook = createBook
module.exports.getBooks = getBooks