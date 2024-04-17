const express = require('express')
const router = express.Router()
const loginControllerAluno = require('../controllers/LoginControllerAluno')

router.get("/login", loginControllerAluno.getLogin)

router.get("/logged", loginControllerAluno.getLogged)

module.exports = router