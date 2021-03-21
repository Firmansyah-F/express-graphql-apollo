"use strict";
const faker = require("faker");

const books = [...Array(5)].map((books) => {
  return {
    writerId: faker.random.number({ min: 1, max: 5 }),
    categoryId: faker.random.number({ min: 1, max: 5 }),
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    photo: "",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("books", books);
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
