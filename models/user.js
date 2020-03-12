const bcrypt = require("bcryptjs"); //npm for PW hashing
// Creating the User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });
  // Checks if an unhashed PW entered by user can be compared to the stored, hashed PW 
  User.prototype.validPassword = function(password) {
      console.log(password, "PW"); //nonhashed
    return bcrypt.compareSync(password, this.password);
  };
  
  // Before a User is created, automatically hash their PW
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
