const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController')
const PublisherController = require('../controllers/publisherController')
const BookController = require('../controllers/bookController')

router.post('/createAuthor', AuthorController.createAuthor)
router.post('/createPublisher', PublisherController.createPublisher)
router.post('/createBook', BookController.createBook)
router.get('/getBooks', BookController.getBooks)
router.put('/books', BookController.bookUpdate)

module.exports = router;