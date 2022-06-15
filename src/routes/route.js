const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const tokenMid= require("../middlewares/auth")
const userMid= require("../middlewares/auth2")

router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", tokenMid.checkToken, userMid.userAuth, userController.getUserData)
router.put("/users/:userId", tokenMid.checkToken, userMid.userAuth, userController.updateUser)
router.delete("/users/:userId", tokenMid.checkToken, userMid.userAuth, userController.deleteUser)

module.exports = router;