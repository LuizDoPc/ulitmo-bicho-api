import express from 'express'
import resultadosController from './controllers/ResultadosController'

const app = express()

app.use(express.json())

app.get('/getResultado', resultadosController.getResultado)

app.listen(process.env.PORT || 3333)
