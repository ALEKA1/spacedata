var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('API Request Timestamp: ', Date.now())
  next()
})

router.get('/solarsystem', function (req, res) {
  res.json({
    'test': 'solarsystem'
  })
})

module.exports = router
