'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicle.belongsTo(models.type)
      vehicle.hasMany(models.rental)
      // define association here
    }
  };
  vehicle.init({
    name: DataTypes.STRING,
    typeId: DataTypes.INTEGER,
    hourlyPrice: DataTypes.DECIMAL,
    licensePlate: DataTypes.STRING,
    status: DataTypes.ENUM("rent","off","broke"),
    photo: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vehicle',
    paranoid : true
  });
  return vehicle;
};