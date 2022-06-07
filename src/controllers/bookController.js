const BookModel = require('../models/bookModel.js')
const AuthorModel = require('../models/authorModel.js')

const createBook = async function(req,res){
    let data = req.body
    let createdBook = await BookModel.create(data)
    res.send({ msg : createdBook })
}

const createAuthor = async function(req,res){
    let data = req.body
    let createdBook = await AuthorModel.create(data)
    res.send({ msg : createdBook })
}

const getBook = async function(req,res){
    let data = req.body.authorName
    let foundAuthor = await AuthorModel.findOne({"authorName" : data})
    let books = await BookModel.find({ "author_id" : foundAuthor.author_id})

    res.send({ msg : books })
}

const updatePrice = async function(req,res){
    let data = req.body.bookName
    let foundBook = await BookModel.findOneAndUpdate({ "bookName" : data}, { $set:{ "price" : 150}}, {new : true})
    let author = await AuthorModel.findOne({ "author_id" : foundBook.author_id })

    res.send({ msg : [author.authorName, foundBook.price] })
}

const priceBooks = async function(req,res){
    let foundBook = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select( {"author_id" : 1, _id : 0} )

    let author = []

    for(let i=0; i< foundBook.length ; i++){
        let name = await AuthorModel.findOne({ "author_id" : foundBook[i].author_id })
        if( !author.find(ele => ele == name.authorName ))    author.push(name.authorName)
    }

    res.send({ msg : author })
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBook = getBook
module.exports.updatePrice = updatePrice
module.exports.priceBooks = priceBooks