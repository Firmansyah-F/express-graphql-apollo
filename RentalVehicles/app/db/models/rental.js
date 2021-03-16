'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rental.belongsTo(models.user)
      rental.belongsTo(models.vehicle)
      // define association here
    }
  };
  rental.init({
    userId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    startAt: DataTypes.DATE,
    backAt: DataTypes.DATE,
    status: DataTypes.ENUM("done","progres"),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'rental',
    paranoid : true
  });
  return rental;
};