const loginModel = require('../models/LoginModel')


exports.getLogin = ((req, res) => {
    const login = new loginModel()
    res.send(`<h1>${login.isLogged()}</h1>`)}
    )

    exports.getLogged = ((req, res) => {
        const login = new loginModel()
        const logged = login.isLogged()
        res.render("LoginView", {logged: logged})
    })