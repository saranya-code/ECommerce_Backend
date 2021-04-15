const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,     //validate
        allowNull: false,
        validate: {
          isDecimal: true
        },
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 10, // set 10
        allowNull: false,  
        validate: {
          isNumeric: true
        }, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
