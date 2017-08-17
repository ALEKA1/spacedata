var express = require('express');
var models  = require('../models');
var router = express.Router();

var planetController = require('../controllers/planet-controller')(models.Planet);
var planetarySystemController = require('../controllers/planetary-system-controller')(models.PlanetarySystem);

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('API Request Timestamp: ', Date.now());
  next();
});

router.route('/planets')
  .get(planetController.getAll)
  .post(planetController.create);

router.get('/planets/:planetId', planetController.getById);

router.route('/planetary-systems')
  .get(planetarySystemController.getAll);

module.exports = router;
