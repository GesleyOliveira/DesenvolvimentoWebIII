var Project = require('../models/projectModel');

exports.getProject = async function (req, res) {
    /*
       #swagger.tags = ['Project']
       #swagger.description = 'Mostra todos os projetos'
   */
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
    /*
        #swagger.tags = ['Project']
        #swagger.description = 'Cria um novo projeto'
    */
    let project = new Project(
        {
            title: req.body.title,
            description: req.body.description,
            assignedTo: req.body.assignedTo
        }
    );
    try {
        project.save()
        res.status(201).send(project.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar projeto.` })
    }
};

exports.delete = async function (req, res) {
    /*
        #swagger.tags = ['Project']
        #swagger.description = 'Deleta o projeto pelo id'
    */
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: `Excluído com sucesso!` })
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao deletar o projeto.` })
    }
};

exports.update = async function (req, res) {
    /*
        #swagger.tags = ['Project']
        #swagger.description = 'Atualiza o projeto pelo id'
    */
    try {
        const result = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao atualizar o projeto.` })
    }
};

exports.details = async function (req, res) {
    /*
        #swagger.tags = ['Project']
        #swagger.description = 'Exibe o projeto especificado pelo id'
    */
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};
