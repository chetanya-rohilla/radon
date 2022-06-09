const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/authorModel')
const PublisherModel = require('../models/publisherModel')
const { updateMany } = require('../models/bookModel')

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

const bookUpdate = async function(req,res){
    let books = await BookModel.find().populate(['author','publisher'])
    let finalBooks = []
    for (let i=0; i<books.length; i++){
        if(books[i].publisher.name == "Penguin" || books[i].publisher.name == "HarperCollins"){
            let updatedBook = await BookModel.updateOne({name : books[i].name}, {$set : {isHardCover : true}})
            finalBooks.push(updatedBook)
        }

        if(books[i].author.rating > 3.5){
            let updatedBook = await BookModel.updateOne({name : books[i].name}, {$set : {price : books[i].price + 10}})
            finalBooks.push(updatedBook)
        }
    }

    

    res.send({msg : finalBooks})
}


module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.bookUpdate = bookUpdate