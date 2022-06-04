const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( 
  {
    bookName: {
      type : String,
      required : true
    },
    authorName: String,
    Category: {
        type: String,
        enum: ["horror", "action", "adventure", "comic", "mystery", "fantasy"] 
    },
    year: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array