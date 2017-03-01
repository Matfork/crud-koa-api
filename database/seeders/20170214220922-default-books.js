'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('book', [{
        id: 1,
        name: 'Red Rising',
        description: 'Sci-fi, first book of trilogy red Rising',
        publication_date : new Date('2008-03-03'),
        author_id : 2,
        created_at : new Date(),
        updated_at : new Date()
      },{
        id: 2,
        name: 'Golden Son',
        description: 'Sci-fi, second book of trilogy red Rising',
        publication_date : new Date('2011-05-05'),
        author_id : 2,
        created_at : new Date(),
        updated_at : new Date()
      },{
        id: 3,
        name: 'Tips for your life',
        description: 'Self-helper, Getting a new hobby for your life!',
        publication_date : new Date('2012-08-09'),
        author_id : 1,
        created_at : new Date(),
        updated_at : new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('book', null, {});
  }
};
