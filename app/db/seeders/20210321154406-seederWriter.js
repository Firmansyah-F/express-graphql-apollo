"use strict";
const faker = require("faker");
faker.locale = "id_ID";

const writers = [...Array(5)].map((writers) => {
  return {
    full_name: faker.name.findName(),
    email: faker.internet.email(),
    photo: "",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("writers", writers);
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
