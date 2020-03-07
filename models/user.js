const bcrypt = require("bcryptjs"); //this is an npm for PW hashing

//Create the User model
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      }, 
      user_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isUserName: true
          }
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
 // This checks if an unhashed PW from user can be compared to hashed PW we stored 
 User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before User is created, automatically hash their PW
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
