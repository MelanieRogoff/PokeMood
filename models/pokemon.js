module.exports = function(sequelize, DataTypes) {
    const Pokemon = sequelize.define("Pokemon", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mood: {
           type: DataTypes.STRING,
           allowNull: false 
        }
    });
    return Pokemon;
}