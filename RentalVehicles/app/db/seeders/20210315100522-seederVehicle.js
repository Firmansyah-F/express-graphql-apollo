'use strict';
const faker = require("faker");
faker.locale = "id_ID"; // localization Indonesia


const vehicle = [...Array(10)].map((vehicle) => {
    return {
        name : faker.vehicle.vehicle(),
        typeId : faker.random.number({min:1,max:10}),
        hourlyPrice: faker.finance.amount(),
        licensePlate : faker.vehicle.vrm(),
        status : faker.random.arrayElement(["off","rent","broke"]),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    };
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("vehicles",vehicle)
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
