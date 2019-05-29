var express = require("express");
var router = express.Router();
var controller = require("./contoroller");
router.route("/users/")
  .post((req, res, next) => {
    if (!req.body) return res.sendStatus(400);
    if (req.body.name && req.body.date) {
      controller.addUser(req, res, req.body.name, req.body.date)
    }
    else {
      return res.send({ error: "Not full params" })
    }
  })
  .get(controller.showall);
router.route("/users/:id")
  .get(controller.showById)
  .delete(controller.deleteById);
module.exports.Router = router