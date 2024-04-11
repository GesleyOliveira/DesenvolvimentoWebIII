const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var alunos = [
    {
        ra: 125,
        nome: 'Gesley',
        turma: 'DSM',
        habilidades: ["Python", "Java", "Javascript"]
    }
]

//Post – Adicionar um aluno na lista
app.post('/', (req, res) => {
  alunos.push(req.body)
  res.send(`Post ${JSON.stringify(alunos)}`)
})

//Post – Adicionar um curso para o aluno 

app.post('/curso', (req, res) => {
  const index = alunos.findIndex(x => x.ra == req.query.ra);
  let habilidade = req.body.habilidade;
  alunos[index].habilidades.push(habilidade);
  res.send(`Post ${JSON.stringify(alunos)}`);
})

// Put – Alterar os dados de um aluno através do RA
app.put('/', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    if(req.body.nome != null){
        alunos[index].nome =  req.body.nome
    }
    if(req.body.turma != null){
        alunos[index].turma =  req.body.turma
    }
    if(req.body.habilidades != null){
        alunos[index].habilidades = req.body.habilidades
    }
   
    res.send(JSON.stringify(alunos[index]))
})

// Put – Alterar o curso do aluno 

app.put('/curso', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    const index2 = alunos[index].habilidades.findIndex(x => x.habilidade == req.query.habilidade)
   
    alunos[index].habilidades[index2] = req.body.habilidade
 
    res.send(JSON.stringify(alunos[index]))
})


 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




app.delete('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos.splice(index, 1);
  res.send(JSON.stringify(veiculos))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})