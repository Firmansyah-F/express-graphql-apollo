'use strict';
const faker = require('faker')
faker.locale = "id_ID" //localization Indonesia

const todos = [...Array(10)].map(todo => {
  return {
    title :faker.lorem.text(),
    description : faker.lorem.sentences(),
    userId : 3,
    createAt : faker.date.recent(),
    updateAt : faker.date.recent(),
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todos", [
            
    ])
    {


    }
    
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
