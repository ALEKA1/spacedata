module.exports = (sequelize, DataTypes) => {

  console.log('Planet Model --> ');

  const Planet = sequelize.define('planet', {
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

  // Sync needs to happen before table creation
  sequelize.sync({ force: true }).then(() => {
    Planet.create({
        id: 1,
        name: "Mercury",
        diameter: 4879,
        mass: 0.330,
        gravity: 3.7,
        density: 5427,
        rotationPeriod: 1407.6,
        lengthOfDay: 4222.6,
        distanceFromParent: 57900000,
        orbitalPeriod: 88,
        orbitalVelocity: 47.4,
        orbitalInclination: 7,
        axialTilt: 0.01,
      })
      .then(planet => {
        console.log('Created planet: ' + planet.name);
      })
      .catch(err => {
        console.error('ERROR', err.message);
      })

    Planet.create({
        id: 2,
        name: "Venus",
        diameter: 12104,
        mass: 4.87,
        gravity: 8.9,
        density: 5243,
        rotationPeriod: -5832.5,
        lengthOfDay: 2802,
        distanceFromParent: 108200000,
        orbitalPeriod: 224.7,
        orbitalVelocity: 35,
        orbitalInclination: 3.4,
        axialTilt: 177.4,
      })
      .then(planet => {
        console.log('Created planet: ' + planet.name);
      })
      .catch(err => {
        console.error('ERROR', err.message);
      })

    Planet.create({
      id: 3,
      name: "Earth",
      diameter: 12756,
      mass: 5.97,
      gravity: 9.8,
      density: 5514,
      rotationPeriod: 23.9,
      lengthOfDay: 24,
      distanceFromParent: 149600000,
      orbitalPeriod: 365.2,
      orbitalVelocity: 29.8,
      orbitalInclination: 0,
      axialTilt: 23.4,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 4,
      "name": "Mars",
      "diameter": 6792,
      "mass": 0.642,
      "gravity": 3.7,
      "density": 3933,
      "rotationPeriod": 24.6,
      "lengthOfDay": 24.7,
      "distanceFromParent": 227900000,
      "orbitalPeriod": 687,
      "orbitalVelocity": 24.1,
      "orbitalInclination": 1.85,
      "axialTilt": 25.2,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 5,
      "name": "Jupiter",
      "diameter": 142984,
      "mass": 1898,
      "gravity": 23.1,
      "density": 1326,
      "rotationPeriod": 9.9,
      "lengthOfDay": 9.9,
      "distanceFromParent": 778600000,
      "orbitalPeriod": 4331,
      "orbitalVelocity": 13.1,
      "orbitalInclination": 1.303,
      "axialTilt": 3.13,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 6,
      "name": "Saturn",
      "diameter": 120536,
      "mass": 568,
      "density": 687,
      "gravity": 9,
      "rotationPeriod": 10.7,
      "lengthOfDay": 10.7,
      "distanceFromParent": 1433500000,
      "orbitalPeriod": 10747,
      "orbitalVelocity": 9.7,
      "orbitalInclination": 2.48524,
      "axialTilt": 26.73,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 7,
      "name": "Uranus",
      "mass": 86.8,
      "diameter": 51118,
      "density": 1271,
      "gravity": 8.7,
      "rotationPeriod": -17.2,
      "lengthOfDay": 17.2,
      "distanceFromParent": 2872500000,
      "orbitalPeriod": 30589,
      "orbitalVelocity": 6.8,
      "orbitalInclination": 0.8,
      "axialTilt": 97.8,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 8,
      "name": "Neptune",
      "mass": 102,
      "diameter": 49528,
      "density": 1638,
      "gravity": 11,
      "rotationPeriod": 16.1,
      "lengthOfDay": 16.1,
      "distanceFromParent": 4495100000,
      "orbitalPeriod": 59800,
      "orbitalVelocity": 5.4,
      "orbitalInclination": 1.8,
      "axialTilt": 28.3,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })

    Planet.create({
      "id": 9,
      "name": "Pluto",
      "mass": 102,
      "diameter": 2374,
      "density": 1638,
      "gravity": 11,
      "rotationPeriod": 16.1,
      "lengthOfDay": 6.39,
      "distanceFromParent": 5874000000,
      "orbitalPeriod": 90570,
      "orbitalVelocity": 4.67,
      "orbitalInclination": 17.2,
      "axialTilt": 119.59,
    })
    .then(planet => {
      console.log('Created planet: ' + planet.name);
    })
    .catch(err => {
      console.error('ERROR', err.message);
    })
  }).catch(err => {
    console.error('\n\n\n\nERROR:', err)
  })

  return Planet;
}























