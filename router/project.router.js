import express from 'express'
import controller from '../controller/project.controller.js'

const router = express.Router()

router.route('/')
.get(controller.findAllPublicados)

router.route('/enviar-testimonio')
.get(controller.formTestimonio)
.post(controller.create)





export default router
