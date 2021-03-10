'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const publisher = [...Array(10)].map((publisher) => {
    return {
        name : faker.name.firstName(),
        address : faker.address.city(),
        email : faker.internet.exampleEmail(),
        phone : faker.phone.phoneNumber(),
        website : faker.internet.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("publishers",publisher)
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
