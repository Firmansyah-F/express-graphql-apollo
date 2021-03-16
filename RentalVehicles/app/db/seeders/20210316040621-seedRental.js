'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const rental = [...Array(10)].map((rental) => {
    return {
        userId : faker.random.number({min:1,max:10}),
        vehicleId : faker.random.number({min:1,max:10}),
        startAt : faker.date.recent(),
        backAt : faker.date.soon(),
        status : "progres",
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});
    
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("rentals",rental)
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
