const express = require('express')
const BookController = require('../controllers/bookController')
const router = express.Router()

router.get('/getBook', BookController.getBook)
router.post('/createBook', BookController.createBook)

module.exports = router