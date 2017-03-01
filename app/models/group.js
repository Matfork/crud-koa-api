'use strict';

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    group: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'group',
    timestamps: false
  });
  return Group;
};
