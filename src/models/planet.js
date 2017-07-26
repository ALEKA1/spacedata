module.exports = (sequelize, DataTypes) => {

  const Planet = sequelize.define('Planet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING
    },
    diameter: {
      type: DataTypes.FLOAT,
    },
    mass: {
      type: DataTypes.FLOAT,
    },
    gravity: {
      type: DataTypes.FLOAT,
    },
    density: {
      type: DataTypes.FLOAT,
    },
    rotationPeriod: {
      type: DataTypes.FLOAT,
    },
    lengthOfDay: {
      type: DataTypes.FLOAT,
    },
    distanceFromParent: {
      type: DataTypes.FLOAT,
    },
    orbitalPeriod: {
      type: DataTypes.FLOAT,
    },
    orbitalVelocity: {
      type: DataTypes.FLOAT,
    },
    orbitalInclination: {
      type: DataTypes.FLOAT,
    },
    axialTilt: {
      type: DataTypes.FLOAT,
    },
  })    

  return Planet;
}























