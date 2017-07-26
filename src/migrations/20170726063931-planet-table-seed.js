'use strict';

const planetsData = require('../data/planets');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Planets', planetsData);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Planets', null, {});
  }
};
