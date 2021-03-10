'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const book = [...Array(10)].map((book) => {
    return {
        // authorId : faker.random.number({ 'min': 1, 'max': 11 }),
        // publisherId : faker.random.number({ 'min': 1, 'max': 11 }),
        title : faker.lorem.word(),
        price : faker.commerce.price(),
        year : faker.date.past(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("books",book)
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
