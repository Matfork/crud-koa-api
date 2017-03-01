'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('author', [{
        id:1,
        first_name: 'John',
        last_name: 'Doe',
        age : 52,
        created_at : new Date(),
        updated_at : new Date()
      },{
        id:2,
        first_name: 'Pierce',
        last_name: 'Brown',
        age : 35,
        created_at : new Date(),
        updated_at : new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('author',null, {});
  }
};
