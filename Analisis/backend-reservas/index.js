const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const reservasRoutes = require('./routes/reservas')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/reservas', reservasRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
  console.log(`📘 Swagger en http://localhost:${PORT}/api-docs`)
})
