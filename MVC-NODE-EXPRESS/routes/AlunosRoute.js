const express = require('express')
const alunosRoute = express.Router()
const alunosController = require('../controllers/AlunosController')

alunosRoute.get("/alunos", alunosController.get)

alunosRoute.get("/alunos/getall", alunosController.getAll)

alunosRoute.post("/alunos/save", alunosController.save)

module.exports = alunosRoute