import project from '../model/project.dao.js'

export function findAllPublicados(req, res){
    project.findAllPublicados().then(function(projects){
        res.render(
            "home", {projects}
        )
    })
    .catch(function(err){
        res.status(500).json({err})
    })
}

export function formTestimonio(req, res){
    res.render(
        "formTestimonio"
    )
}

export function create(req, res){
    project.create(req.body).then(function(project){
        res.render(
            "exito", {project}
        )
    })
    .catch(function(err){
        res.status(500).json({err})
    })
}

export default{
    findAllPublicados,
    formTestimonio,
    create,
}