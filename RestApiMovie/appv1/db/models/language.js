'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      language.hasMany(models.movie)
    }
  };
  language.init({
    language: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'language',
  });
  return language;
};