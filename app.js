const express = require('express')

const routes = require('./routes')
const models = require('./models')

const app = express()
const debug = require('debug')('wetennis:app')

app.use('/api', routes)

const server = app.listen(8090, () => {
  debug('Express server listening on port ' + server.address().port)
})
