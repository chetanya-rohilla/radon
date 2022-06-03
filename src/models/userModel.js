const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( 
  {
    firstName: {
      type : String,
      required : true
    },
    lastName: String,
    mobile: {
        type: String, //+91 (2041) 854
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    age: Number,
    isIndian: Boolean,
    parentsInfo: {
        motherName: String,
        fatherName: String,
        siblingName: String
    },
    cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array