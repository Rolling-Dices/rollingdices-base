const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        slug: DataTypes.STRING,
        name: DataTypes.STRING,
        //birth_date: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING
      },{
        hooks: {
          beforeCreate: async(User, options) => {

          User.password = await bcrypt.hash(User.password, 10)

          }
      },
      sequelize
      }
    );
  }
}

module.exports = User;
