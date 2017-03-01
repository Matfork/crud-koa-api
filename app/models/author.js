'use strict';

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'author',
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Book, {
          onDelete: 'CASCADE',
          hooks:true
        });
      }
    }
  });
  return Author;
};
