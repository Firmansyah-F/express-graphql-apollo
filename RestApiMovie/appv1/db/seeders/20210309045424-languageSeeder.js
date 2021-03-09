'use strict';
const faker = require("faker");
// faker.locale = "id_ID"; // localization Indonesia


const language = [...Array(10)].map((movie) => {
    return {
        language : faker.address.country(),
        code : faker.address.countryCode(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),

    };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("languages",language)
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
