const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Producttag extends Model {}

Producttag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car',
  }
);

module.exports = producta;
