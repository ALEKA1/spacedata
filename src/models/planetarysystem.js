'use strict';

module.exports = function(sequelize, DataTypes) {

  const PlanetarySystem = sequelize.define('PlanetarySystem', {
    id: {
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    primary: DataTypes.STRING,
    name: DataTypes.STRING,
    ra: DataTypes.STRING,
    dec: DataTypes.STRING,
    radialDistance: DataTypes.INTEGER,
    numberOfPlanets: DataTypes.INTEGER,
    spectralType: DataTypes.STRING,
    luminosityClass: DataTypes.INTEGER,
    discoveredBy: DataTypes.STRING
  }, 
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return PlanetarySystem;
};