const express = require('express');
const router = express.Router();
const MyController = require('../controllers/myController')

router.get('/hello', MyController.getRes)
router.get('/test-me', MyController.getRes)

module.exports = router;