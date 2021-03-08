'use strict';

const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia

// console.log(faker.name.findName())

const todos = [...Array(10)].map((todo) => {
    return {
        title   : faker.lorem.sentence(),
        description : faker.lorem.sentence(),
        userid : 10,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});
    
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todos",todos)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
