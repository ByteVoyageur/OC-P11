const path = require('path');
const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load(path.join(__dirname, '..', 'swagger.yaml'));
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = 8086

// Connect to the database
dbConnection()

// print the environment
console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`)

// Handle CORS issues
app.use(cors({
  origin: 'https://banque.xiaosong.fr'
}))

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
