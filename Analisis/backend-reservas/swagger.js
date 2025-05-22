const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Pilla tu cupo',
      version: '1.0.0',
      description: 'Documentación de la API para Pilla tu cupo',
    },
  },
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = swaggerSpec
