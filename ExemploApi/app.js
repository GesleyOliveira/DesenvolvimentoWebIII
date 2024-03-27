const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let names = []

app.get('/', (req, res) => {
  res.json(names)
})

/*app.post('/', (req, res) => {
    names.push(req.body.name)
    res.send(`Lendo nome: ${req.body.name}`)
  })*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function calculaTemp(type, temperature){
    switch(type){
        case "C":
            let farenheit = ((9*temperature)/5) + 32;
            return `Conversão: F | Temperatura: ${farenheit}`
        case "F":
            let celsius = (5*(temperature-32))/9;
            return `Conversão: C | Temperatura: ${celsius}`
    }
} 

/*app.post('/', (req, res) => {
    res.send(`Tipo: ${req.body.type}
              Temperatura: ${req.body.temperature}
              ${calculaTemp(req.body.type, req.body.temperature)}`
             )
    
  })*/


app.post('/', (req, res) => {
    let qtd = req.query.qtd;
    let notas = req.body.nota;
     abaixoDaMedia = notas.filter( => (nota < 60));
    res.send(`Quantidade: ${qtd} | notas: ${notas}
            ${abaixoDaMedia}`)
  })

/*app.post('/media', (req, res) => {
    names.push(req.body.name)
    res.send(`Lendo nome: ${req.body.name}`)
  })*/