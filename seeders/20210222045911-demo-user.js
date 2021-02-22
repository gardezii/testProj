'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {id: 1, name: 'John', manager_id: 5, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, name: 'Mark', manager_id: 8, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, name: 'Steve', manager_id: 8, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, name: 'Tom', manager_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, name: 'Lara', manager_id: 8, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, name: 'Simon', manager_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, name: 'David', manager_id: 4, createdAt: new Date(), updatedAt: new Date()},
      {id: 8, name: 'Ben', createdAt: new Date(), updatedAt: new Date()},
      {id: 9, name: 'Stacy', manager_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 10, name: 'Sam', manager_id: 5, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});

  }
};
