"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cards = require("../../assets/mock/cards.json");
    return queryInterface.bulkInsert("cards", cards, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
