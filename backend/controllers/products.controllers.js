const db = require("../models");

exports.get = (req, res) => {
  db.products.findAll().then((products) => {
    res.setHeader("Content-Type", "application/json");
    res.send(products);
  });
};
