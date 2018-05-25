const express = require('express')
var cors = require('cors')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

//Security 
const helmet  = require('helmet')
var hsts = require('hsts')
var xssFilter = require('x-xss-protection')
var nosniff = require('dont-sniff-mimetype')


const api = require('./server/routes/api')
const app = express()

app.use(express.static('assets'))

app.use(cors())

app.use(hsts({
  maxAge: 15552000  // 180 days in seconds
}))

app.use(xssFilter())

app.use(nosniff())

//Remove x-powered-by response header to stop 
//from disclosing server information
app.disable('x-powered-by')
//helps you secure app by setting various HTTP headers.
//https://www.npmjs.com/package/helmet
app.use(helmet({
    noCache: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))

// Set our api routes
app.use('/api', api)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000'
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`))