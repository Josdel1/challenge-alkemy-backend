'use strict';

const { Model } = require('sequelize');

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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type:DataTypes.INTEGER,
      validate:{
        isInt: true
      }
    },
    weight: {
      type:DataTypes.FLOAT,
      validate:{
        isFloat: true
      }
    },
    story: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};