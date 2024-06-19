const { checkJwt } = require("./jwtMiddleware.js");

module.exports = (app) => {
  const products = require("../controllers/products.controllers.js");
  var router = require("express").Router();

  router.get("/", products.get);

  app.use("/products", router);
};
