module.exports = (sequelize, Sequelize) => {
  const Cards = sequelize.define("cards", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ccv: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expirydate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Cards;
};
