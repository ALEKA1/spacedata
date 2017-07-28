'use strict';

module.exports = function(sequelize, DataTypes) {

  const PlanetarySystem = sequelize.define(
    'PlanetarySystem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      /**
       * The parent star(s) of the planetary system.
       */
      parent: {
        type: DataTypes.STRING,
      },

      /**
       * The constellation where the system is located
       */
      constellation: {
        type: DataTypes.STRING,
      },

      /**
       * Angular distance measured eastward
       *
       * https://en.wikipedia.org/wiki/Right_ascension
       */
      rightAscension: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },

      /**
       * Brightness as seen by an observer from Earth
       *
       * https://en.wikipedia.org/wiki/Apparent_magnitude
       */
      apparentMagnitude: {
        type: DataTypes.STRING,
      },

      /**
       * Distance from the Solar System in light years
       *
       * https://en.wikipedia.org/wiki/Cosmic_distance_ladder
       */
      distance: {
        type: DataTypes.FLOAT,
      },

      /**
       * Number of child planets
       */
      numberOfPlanets: {
        type: DataTypes.INTEGER,
      },

      /**
       * Stellar classification based on temperature color and luminosity
       * 
       * https://en.wikipedia.org/wiki/Stellar_classification
       */
      spectralType: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },

      /**
       * Measurement of stellar mass.  It is usually enumerated 
       * in terms of the Sun's mass as a proportion of a solar mass.
       */
      mass: {
        type: DataTypes.FLOAT
      }

      /**
       * Name(s) of who discovered the system
       */
      discoveredBy: {
        type: DataTypes.STRING,
      },

      /**
       * Database date (Not when the actual system was created)
       */
      createdAt: {
        type: DataTypes.DATE
      },

      /**
       * Database date (Not when the actual system was updated) 
       */
      updatedAt: {
        type: DataTypes.DATE
      },
    }
  );

  return PlanetarySystem;
};