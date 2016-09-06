const express = require('express')

// Create router
const router = express.Router()

// Expose render
router.render = function (req, res) {
  res.json(res.locals.data)
}

// Create routes
router.use('/news', require('./news')())


router.use(function (req, res) {
  if (!res.locals.data) {
    res.status(404)
    res.locals.data = {}
  }

  router.render(req, res)
})

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.stack)
})

module.exports = router
