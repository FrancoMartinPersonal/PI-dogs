const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },
    age_span:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
