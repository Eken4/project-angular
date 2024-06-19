module.exports = (app) => {
  require("./products.routes")(app);
  require("./cards.routes")(app);
  require("./user.routes")(app);
};
