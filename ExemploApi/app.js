const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let items = []
const veiculos = [{ id: 1, name: "Fiat" },
{ id: 2, name: "Celta" }, { id: 13, name: "Marea" }];


app.post('/', (req, res) => {
  items.push(req.body.name)
  res.send(`Post ${req.body.name}`)
})

app.put('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos[index] = { id: req.query.id, name: req.body.name }
  res.send(JSON.stringify(veiculos))
})

app.delete('/', (req, res) => {
  const index = veiculos.findIndex(x => x.id == req.query.id);
  veiculos.splice(index, 1);
  res.send(JSON.stringify(veiculos))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



