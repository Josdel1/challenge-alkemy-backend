'use strict';
const { Model } = require('sequelize');
const { Movie } = require('../models/index');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
    }
  }
  Character.init({
    img: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    story: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};