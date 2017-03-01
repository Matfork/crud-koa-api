'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('group', [{
      id:1,
      group: 'Administrator'
    },{
      id:2,
      group: 'Client'
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('group', null, {});
  }
};
