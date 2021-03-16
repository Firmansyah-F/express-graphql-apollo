'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model :"users",
          key:"id"
        }
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model :"vehicles",
          key:"id"
        }
      },
      totalPrice: {
        type: Sequelize.DECIMAL
      },
      startAt: {
        type: Sequelize.DATE
      },
      backAt: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values : ["done","progres"],
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull : true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rentals');
  }
};