const express = require('express')
const BookController = require('../controllers/bookController')
const router = express.Router()

router.post('/createAuthor', BookController.createAuthor)
router.post('/createBook', BookController.createBook)
router.post('/getBook', BookController.getBook)
router.post('/updatePrice', BookController.updatePrice)
router.get('/priceBooks', BookController.priceBooks)
router.get('/books-by-authorid/:id', BookController.getBookAuthor)
router.get('/authorAge', BookController.authorAge)

module.exports = router