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
    }
  })

  return Planet;
}
