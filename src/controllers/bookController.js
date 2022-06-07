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
    let createdBook = await AuthorModel.findOne({"authorName" : data})
    let books = await BookModel.find({ "author_id" : createdBook.author_id})

    res.send({ msg : books })
}

const updatePrice = async function(req,res){
    let data = req.body.bookName
    let createdBook = await BookModel.findOneAndUpdate({ "bookName" : data}, { "price" : 200}, {new : true})
    let author = await AuthorModel.findOne({ "author_id" : createdBook.author_id })

    res.send({ msg : [author.authorName, createdBook.price] })
}

const priceBooks = async function(req,res){
    let createdBook = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select( {"author_id" : 1, _id : 0} )

    let allId = []
    let author = []
   createdBook.forEach(ele => {
        ele.author_id
        if( !allId.find(ele2 => ele2 == ele.author_id) )   allId.push(ele.author_id)
    })

    for(let i=0; i<allId.length ; i++){
        let name = await AuthorModel.findOne({ "author_id" : allId[i] })
        author.push(name.authorName)
    }

    res.send({ msg : author })
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBook = getBook
module.exports.updatePrice = updatePrice
module.exports.priceBooks = priceBooks