module.exports = (Planet) => {
  return {
    getAll(req, res) {
      return Planet
        .findAll({
          order: [
            ['createdAt', 'DESC'],
          ],
        })
        .then((planets) => res.status(200).send(planets))
        .catch((error) => res.status(400).send(error))
    },

    getById(req, res) {
      return Planet
        .findById(req.params.planetId)
        .then((planet) => {
          if (!planet) {
            return res.status(404).send({
              message: 'Planet Not Found',
            });
          }
          return res.status(200).send(planet)
        })
        .catch((error) => res.status(400).send(error))
    }
  };
};
