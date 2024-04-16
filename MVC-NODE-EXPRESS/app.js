// importando os módulos do framework 
const express = require('express')
const app = express()

//importando o módulo de rotas que criamos
const loginRoute = require('./routes/loginRoute')

app.set('view engine', 'ejs')
app.set('views', './views/login')

//usado para adicionar o Router ao caminho de gerenciamento de middleware
app.use(loginRoute)

app.listen(3000, function(){
    console.log('APP rodando na porta 3000');
});