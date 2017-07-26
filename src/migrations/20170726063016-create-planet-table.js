'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Planets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      diameter: {
        type: Sequelize.FLOAT,
      },
      mass: {
        type: Sequelize.FLOAT,
      },
      gravity: {
        type: Sequelize.FLOAT,
      },
      density: {
        type: Sequelize.FLOAT,
      },
      rotationPeriod: {
        type: Sequelize.FLOAT,
      },
      lengthOfDay: {
        type: Sequelize.FLOAT,
      },
      distanceFromParent: {
        type: Sequelize.FLOAT,
      },
      orbitalPeriod: {
        type: Sequelize.FLOAT,
      },
      orbitalVelocity: {
        type: Sequelize.FLOAT,
      },
      orbitalInclination: {
        type: Sequelize.FLOAT,
      },
      axialTilt: {
        type: Sequelize.FLOAT,
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Planets');
  }
};
