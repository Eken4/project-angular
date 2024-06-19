const { checkJwt } = require("./jwtMiddleware.js");

module.exports = (app) => {
  const cards = require("../controllers/cards.controllers.js");
  var router = require("express").Router();

  router.get("/", checkJwt, cards.get);
  router.post("/", checkJwt, cards.post);
  router.delete("/:id", checkJwt, cards.delete);

  app.use("/cards", router);
};
