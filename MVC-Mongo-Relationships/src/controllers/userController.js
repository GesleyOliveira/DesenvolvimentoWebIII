var User = require('../models/userModel');

exports.getUser = async function (req, res) {
    /*
       #swagger.tags = ['User']
       #swagger.description = 'Mostra todos os usuários'
   */
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
     /*
        #swagger.tags = ['User']
        #swagger.description = 'Cria um novo usuário'
    */
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    try {
        user.save()
        res.status(201).send(user.toJSON());
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
    }
};

exports.delete = async function (req, res) {
     /*
        #swagger.tags = ['User']
        #swagger.description = 'Deleta o usuário pelo id'
    */
    try {
        User.findByIdAndDelete(req.query.id)
        res.status(200).send(User.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao deletar o usuário.` })
    }
};

exports.update = async function (req, res) {
    /*
        #swagger.tags = ['User']
        #swagger.description = 'Atualiza o usuário pelo id'
    */
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new : true });
        res.status(200).json(result)
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao atualizar o projeto.` })
    }
};

exports.details = async function (req, res) {
    /*
        #swagger.tags = ['User']
        #swagger.description = 'Exibe o usuário especificado pelo id'
    */
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};