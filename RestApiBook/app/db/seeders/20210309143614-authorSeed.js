'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const author = [...Array(10)].map((author) => {
    return {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.exampleEmail(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("authors",author)
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
