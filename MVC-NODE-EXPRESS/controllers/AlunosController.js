const alunosModel = require('../models/AlunosModel')
const aluno = new alunosModel()
const alunos = aluno.pessoas

exports.get = ((req, res) => {
    res.send(`<h1>Aluno Works!</h1>`)
})

exports.getAll = ((req, res) => {
    res.render("AlunosView", { alunos: alunos })
})

exports.save = ((req, res)=>{
    res.status(200)
})
