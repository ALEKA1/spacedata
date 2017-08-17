'use strict';

module.exports = (PlanetarySystem) => {
  return {
    getAll(req, res) {
      var orderBy = req.query && req.query.orderBy ? req.query.orderBy : 'distance'
      var order = req.query && req.query.order ? [orderBy, req.query.order] : [orderBy]
      var options = {
        order: [
          order,
        ],
      }

      return PlanetarySystem
        .findAll(options)
        .then((data) => {
          res.status(200).send(data)
        })
        .catch((error, b) => {
          console.log('');
          console.log('ERROR:', error);
          console.log('b:', b);
          console.log('');

          res.status(400).send(error)
        })
    }
  };
};
