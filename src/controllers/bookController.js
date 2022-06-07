const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    let allBooks= await BookModel.find( ).count()
    res.send({msg: allBooks})
}

const updateBooks= async function (req, res) {

    let allBooks1= await BookModel.updateMany(
        { auther : "PK"},     //condition
        { $set : { sales : 1000} }      //update
     )

    let allBooks2= await BookModel.updateMany(
        { auther : "PK"},     //condition
        { $set : req.body }      //update
     )

    let allBooks3= await BookModel.findOneAndUpdate(
        { auther : "PK"},     //condition
        { $set : req.body },      //update     gives back old doc
        { new : true }      //gives back new doc
     )

    let allBooks4= await BookModel.findOneAndUpdate(
        { auther : "PK"},     //condition
        { $set : req.body },      //update     gives back old doc
        { new : true, upsert : true }  //creates new doc if doesn't exist 
     )

    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks