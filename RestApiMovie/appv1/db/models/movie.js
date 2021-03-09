'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movie.belongsTo(models.language)
      movie.belongsTo(models.genre)
      // define association here
    }
  };
  movie.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    urlTrailer: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    genreId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};