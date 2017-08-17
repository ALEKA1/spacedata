'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('PlanetarySystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      /**
       * The parent star(s) of the planetary system.
       */
      parent: {
        type: Sequelize.STRING,
      },

      /**
       * The constellation where the system is located
       */
      constellation: {
        type: Sequelize.STRING,
      },

      /**
       * Angular distance measured eastward
       *
       * https://en.wikipedia.org/wiki/Right_ascension
       */
      rightAscension: {
        type: Sequelize.STRING,
      },

      /**
       * North or south degree angle from center point.
       *
       * https://en.wikipedia.org/wiki/Declination
       *
       * degrees (°), minutes ('), and seconds (") of sexagesimal measure
       *
       * Example Ursa Major: +40° 25' 48.9"
       */
      declination: {
        type: Sequelize.STRING,
      },

      /**
       * Brightness as seen by an observer from Earth
       *
       * https://en.wikipedia.org/wiki/Apparent_magnitude
       */
      apparentMagnitude: {
        type: Sequelize.FLOAT,
      },

      /**
       * Distance from the Solar System in light years
       *
       * https://en.wikipedia.org/wiki/Cosmic_distance_ladder
       */
      distance: {
        type: Sequelize.FLOAT,
      },

      /**
       * Number of child planets
       */
      numberOfPlanets: {
        type: Sequelize.INTEGER,
      },

      /**
       * Stellar classification based on temperature color and luminosity
       *
       * https://en.wikipedia.org/wiki/Stellar_classification
       */
      spectralType: {
        type: Sequelize.STRING,
      },

      /**
       * Spectral peculiarity
       *
       * P - Magnetic white dwarf with detectable polarization
       * E - Emission lines present
       * H - Magnetic white dwarf without detectable polarization
       * V - Variable
       * PEC - Spectral peculiarities exist
       */
      luminosityClass: {
        type: Sequelize.STRING,
      },

      /**
       * Measurement of stellar mass.  It is usually enumerated
       * in terms of the Sun's mass as a proportion of a solar mass.
       */
      mass: {
        type: Sequelize.FLOAT,
      },

      /**
       * Kelvin
       */
      temperature: {
        type: Sequelize.INTEGER,
      },

      /**
       * Gigayear (billion years)
       *
       * 10^9 years (10⁹ years)
       */
      age: {
        type: Sequelize.FLOAT,
      },

      /**
       * Name(s) of who discovered the system
       */
      discoveredBy: {
        type: Sequelize.STRING,
      },

      /**
       * Any extra notes or description about the system.
       */
      notes: {
        type: Sequelize.STRING,
      },

      /**
       * Database date (Not when the actual system was created)
       */
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },

      /**
       * Database date (Not when the actual system was updated)
       */
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('PlanetarySystems');
  }
};
