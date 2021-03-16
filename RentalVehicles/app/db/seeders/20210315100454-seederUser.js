'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const user = [...Array(10)].map((user) => {
    return {
        fullname : faker.name.findName(),
        username : faker.name.firstName(),
        email : faker.internet.exampleEmail(),
        password : faker.internet.password(),
        role : "guest",
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users",user)
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
