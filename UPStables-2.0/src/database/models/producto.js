// 'use strict';
// const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const alias = 'Producto';
  const cols = {
    id: {
      unsigned: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    modelo: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    precio: {
      allowNull: false,
      unsigned: true,
      type: DataTypes.DECIMAL(8,2)
    },
    descuento: {
      unsigned: true,
      type: DataTypes.DECIMAL(2,1)
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_potencia: {
      unsigned: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_tomas: {
      unsigned: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_marcas: {
      unsigned: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_categorias: {
      unsigned: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_imagen: {
      unsigned: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }
  const config = {
    tableName: 'productos',
    timestamps: true
  }
  const Producto = sequelize.define(alias, cols, config)

  Producto.associate = (modelos) => {

    Producto.belongsTo(modelos.Categoria,{
      as:'categorias',
      foreignKey:'id_categorias'
    });

    Producto.belongsTo(modelos.Marca,{
      as:'marcas',
      foreignKey:'id_marcas'
    });

    Producto.belongsTo(modelos.Potencia,{
      as:'potencias',
      foreignKey:'id_potencias'
    });

    Producto.belongsTo(modelos.Toma,{
      as:'tomas',
      foreignKey:'id_tomas'
    });

    Producto.belongsTo(modelos.Imagen,{
      as:'imagenes',
      foreignKey:'id_imagen'
    });

    Producto.belongsToMany(modelos.Carrito_Compra,{
      as:'imagenes',
      foreignKey:'id_imagen'
    });

  }

  return Producto;
};