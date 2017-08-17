'use strict';

const planetarySystemsData = require('../data/planetary-systems');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PlanetarySystems', planetarySystemsData);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlanetarySystems', null, {});
  }
};
