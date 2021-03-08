'use strict';

const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia

// console.log(faker.name.findName())

const comments = [...Array(10)].map((comment) => {
    return {
        body : faker.lorem.sentence(),
        todoId : 10,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("comments",comments)
  },

  down: async (queryInterface, Sequelize) => {

  }
};
