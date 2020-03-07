module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      id: {
          type: sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      }, 
      user_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      mood: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return User;
};

module.exports = function(sequelize, DataTypes) {
    const Pokemon = sequelize.define("Pokemon", {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mood: {
            
        }
    })
}