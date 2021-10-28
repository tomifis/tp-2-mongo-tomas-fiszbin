import express from 'express'
import project from '../model/project.dao.js'

const router = express.Router()

router.route('/api/testimonios')
.get(function (req, res) {
    project.findAll().then(function(projects){
        res.json(projects)
    })
    .catch(function(err){
        res.status(500).json({err})
    })
})

router.route('/api/testimonios/:id')
.get(function (req, res) {
    project.findById(req.params.id).then(function(projects){
        res.json(projects)
    })
    .catch(function(err){
        res.status(500).json({err})
    })
})
.delete(function (req, res) {
    project.deleteById(req.params.id).then(function(projects){
        res.json(projects)
    })
    .catch(function(err){
        res.status(500).json({err})
    })
})
.patch(function (req, res) {
    project.updateById(req.params.id).then(function(projects){
        res.json(projects)
    })
    .catch(function(err){
        res.status(500).json({err})
    })
})
.put(function (req, res) {
    project.replaceById(req.params.id,req.body).then(function(projects){
        res.json(projects)
    })
    .catch(function(err){
        res.status(500).json({err})
    })
})

export default router
