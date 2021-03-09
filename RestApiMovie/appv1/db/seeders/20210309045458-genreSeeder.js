'use strict';
const faker = require("faker");
// faker.locale = "id_ID"; // localization Indonesia


const genre = [...Array(10)].map((genre) => {
    return {
        genre : faker.music.genre(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),

    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("genres",genre)
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
