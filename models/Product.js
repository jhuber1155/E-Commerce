const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}


Product.init(
  {
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
   product_name: {
    type: DataTypes.STRING
   },
   price: {
    type: DataTypes.DECIMAL (6, 2)
   },
   stock: {
    type: DataTypes.INTEGER
   },
   category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
      unique: false
    }
   }
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
