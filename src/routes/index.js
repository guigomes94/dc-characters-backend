import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "DC Node API",
    version: "0.0.2"
  });
});

module.exports = router;
