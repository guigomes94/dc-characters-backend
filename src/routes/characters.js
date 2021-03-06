const express = require("express");
const router = express.Router();

const controller = require("../controllers/characterController");

router.get("/", controller.get);
router.get("/:name", controller.getByName);
router.get("/admin/:id", controller.getById);
router.get("/skills/:skill", controller.getByTag);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.del);

module.exports = router;
