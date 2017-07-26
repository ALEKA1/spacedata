'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('PlanetarySystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primary: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      ra: {
        type: Sequelize.STRING
      },
      dec: {
        type: Sequelize.STRING
      },
      radialDistance: {
        type: Sequelize.INTEGER
      },
      numberOfPlanets: {
        type: Sequelize.INTEGER
      },
      spectralType: {
        type: Sequelize.STRING
      },
      luminosityClass: {
        type: Sequelize.INTEGER
      },
      discoveredBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('PlanetarySystems');
  }
};