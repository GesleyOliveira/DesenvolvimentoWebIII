const loginModel = require('../models/alunos')


exports.getLogin = ((req, res) => {
    const login = new loginAluno()
    res.send(`<h1>${login.isLogged()}</h1>`)
}
)

exports.getLogged = ((req, res) => {
    const login = new loginAluno()
    const logged = login.isLogged()
    res.render("LoginView", { logged: logged })
})