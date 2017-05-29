const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Space data is coming soon...')
})

app.listen(2583, function () {
  console.log('Example app listening on port 2583')
})
