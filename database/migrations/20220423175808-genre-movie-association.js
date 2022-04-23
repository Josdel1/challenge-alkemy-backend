'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('genres', {
      fields: ['moviesID'],
      type: 'foreign key',
      name: 'genre_movie_association',
      references: {
        table: 'movies',
        field: 'id',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint('genres', {
      fields: ['moviesID'],
      type: 'foreign key',
      name: 'genre_movie_association',
      references: {
        table: 'movies',
        field: 'id',
      }
    });
  }
};
