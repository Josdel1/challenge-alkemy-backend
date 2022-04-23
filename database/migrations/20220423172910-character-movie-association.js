'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('movies', {
      fields: ['characterID'],
      type: 'foreign key',
      name: 'character_movie_association',
      references: {
        table: 'characters',
        field: 'id',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('movies', {
      fields: ['characterID'],
      type: 'foreign key',
      name: 'character_movie_association',
      references: {
        table: 'characters',
        field: 'id',
      }
    });
  }
};
