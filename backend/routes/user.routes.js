const { checkJwt } = require("./jwtMiddleware.js");

module.exports = (app) => {
  const user = require("../controllers/user.controllers.js");

  var router = require("express").Router();

  router.post("/login", user.login);
  router.post("/register", user.register);

  app.use("/user", router);
};
