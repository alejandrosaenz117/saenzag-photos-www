const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const helmet  = require('helmet')
var hsts = require('hsts')
var xssFilter = require('x-xss-protection')
var nosniff = require('dont-sniff-mimetype')
const api = require('./server/routes/api')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('assets'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(hsts({
  maxAge: 15552000  // 180 days in seconds
}))
app.use(xssFilter())
app.use(nosniff())
app.disable('x-powered-by')
app.set('etag', false);
app.use(helmet({
    noCache: true
}))
app.use(express.static(path.join(__dirname, 'dist'),{
  etag: false
}))
// Set our api routes
app.use('/api', api)
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

/**
 * Get port from environment and store in Express.
 */
const server_port = process.env.PORT || 5000
var server_ip_address = process.env.IP || '127.0.0.1'
app.set('port', server_port)
app.set('server_ip_address', server_ip_address)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(process.env.PORT || 5000, () => console.log(`API running on ${server_ip_address}:${server_port}`))