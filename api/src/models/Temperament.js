const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('Temperament',{
        name:{
         type: DataTypes.STRING,
         allowNull:true
        },
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            
        }
    })
}