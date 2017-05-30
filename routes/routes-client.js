var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Client Router Request Timestamp: ', Date.now())
  next()
})

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Space Data'
  });
})

module.exports = router
