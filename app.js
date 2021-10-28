import express from 'express'
import projectRouter from './router/project.router.js'
import projectRouterApi from './router/project.routerApi.js'
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(projectRouter)
app.use(projectRouterApi)

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(80, function () {
    console.log("Server Iniciado")
})