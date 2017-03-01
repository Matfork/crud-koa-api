'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [{
      id:1,
      first_name: 'Matt',
      last_name: 'Hernandez',
      email : 'dahv24@gmail.com',
      password : '12345678',
      group_id : 1,
      created_at : new Date(),
      updated_at : new Date()
    },{
      id:2,
      first_name: 'Juan',
      last_name: 'Perez',
      email : 'jperez@gmail.com',
      password : '12345678',
      group_id : 2,
      created_at : new Date(),
      updated_at : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
