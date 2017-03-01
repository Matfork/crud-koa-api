'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    group_id: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'user',
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Group, {
          onDelete: 'CASCADE',
          hooks:true
        });
      }
    }
  });
  return User;
};
