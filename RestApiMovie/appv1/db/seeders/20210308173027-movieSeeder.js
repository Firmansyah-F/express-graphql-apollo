'use strict';


const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const movie = [...Array(10)].map((movie) => {
    return {
        title : faker.name.title(),
        description : faker.lorem.sentence(),
        urlTrailer : faker.internet.url(),
        releaseDate : faker.date.past(),
        genreId : faker.random.number(1),
        languageId : faker.random.number(1),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("movies",movie)
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
