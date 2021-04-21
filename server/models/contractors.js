module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contractors', {
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    logo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  })
}