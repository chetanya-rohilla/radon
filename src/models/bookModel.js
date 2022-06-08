const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    "bookName" : {
        type : String,
        required : true,
        unique : true
    },
    "autherName" : String,
    "year" : Number,
    "category" : {
        type : String,
        enum : ["horror", "action", "adventure", "comic", "mystery", "fantasy"]
    }
}, { timestamps : true })

module.exports = mongoose.model('Book', bookSchema)