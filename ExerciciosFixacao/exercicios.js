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
  alunos[index] = {nome: req.body.nome, turma: req.body.turma, habilidades: req.body.habilidades};
  res.send(JSON.stringify(alunos));
})




app.delete('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos.splice(index, 1);
  res.send(JSON.stringify(veiculos))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})