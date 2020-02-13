const { Model, DataTypes } = require("sequelize");

class Table extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        master_id: DataTypes.INTEGER,
        last_game: DataTypes.DATE
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Table;
