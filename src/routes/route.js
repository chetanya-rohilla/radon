const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")

router.post('/createUser', UserController.createUser);
router.post('/getUser', UserController.getUser)

module.exports = router;