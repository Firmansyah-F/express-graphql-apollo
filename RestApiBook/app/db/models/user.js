'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    salt: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    role: DataTypes.ENUM("guest", "admin")
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};