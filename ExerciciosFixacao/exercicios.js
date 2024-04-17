import express from "express";

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

// Post – Adicionar um aluno na lista
app.post('/', (req, res) => {
  alunos.push(req.body)
  res.send(`Post ${JSON.stringify(alunos)}`)
})

// Post – Adicionar um curso para o aluno 

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
  var index = alunos.findIndex(x => x.ra == req.query.ra);
  var habiliIndex = alunos[index].habilidades.findIndex(x => x == req.query.hab);

  console.log(req.query.hab);

  if (habiliIndex !== -1) { 
      alunos[index].habilidades[habiliIndex].hab = req.body.habilidades; 
      res.send(JSON.stringify(alunos[index]));
  } else {
      res.status(404).send("Habilidade não encontrada");
  }
});

// Delete – Remover um aluno da lista

app.delete('/', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    alunos.splice(index, 1)

    res.send(JSON.stringify(alunos))
})

// Delete – Remover o curso do aluno

app.delete('/curso', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);
    const index2 = alunos[index].habilidades.findIndex(x => x == req.query.habilidades)

    alunos[index].habilidades.splice(index2, 1)

    res.send(JSON.stringify(alunos))
})

// Get – Listar todos os alunos (RA, Nome, Turma) 

app.get('/', (req, res) => {

    res.send(JSON.stringify(alunos))
})

// Get – Listar um aluno através do RA informado (Nome, Turma, Cursos) 

app.get('/aluno', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);

    res.send(JSON.stringify(alunos[index]))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




