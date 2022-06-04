const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.post("/getBook", BookController.getBook)

module.exports = router;