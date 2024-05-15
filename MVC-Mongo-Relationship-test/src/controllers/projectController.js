var Project = require('../models/projectModel')

exports.getProjects = async function (req, res) {
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function(req, res){
    let project = new Project(
        {
        title: req.query.title,
        description: req.query.description,
        assignedTo: req.query.assignedTo
        }
    )
    project.save()
    .then(res.status(201).send(project.toJSON())
    .catch((err) => {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar o projeto`})
    }))
}

exports.details = async function (req,res){
    try{
        const result = await project.findById(req.params.id)
        res.status(200).json(result)
    } catch(err){
        res.status(500).json(err)
    }
}