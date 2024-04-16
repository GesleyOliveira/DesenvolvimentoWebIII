const express = require('express')
const router = express.Router()
const loginController = require('../controllers/LoginController')

router.get("/login", loginController.getLogin)

router.get("/logged", loginController.getLogged)

module.exports = router