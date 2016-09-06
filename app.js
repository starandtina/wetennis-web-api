const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const routes = require('./routes')
const models = require('./models')

const app = express()
const debug = require('debug')('wetennis:app')

app.use(cors())
app.use(bodyParser.json({
  limit: '10mb',
  extended: false
}))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(methodOverride())
app.use(cookieParser())
app.use('/api', routes)

const server = app.listen(8090, () => {
  debug('Express server listening on port ' + server.address().port)
})
