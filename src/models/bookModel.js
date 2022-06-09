const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    "name" : String,
    "author" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'newAuthor'
    },
    "price" : Number,
    "rating" : Number,
    "publisher" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'newPublisher'
    }
}, {timestamps : true})

module.exports = mongoose.model('newBook', bookSchema)