const repository = require("../repository/character");

(exports.get = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    let data = await repository.get(page);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Fail" });
  }
}),
  (exports.getByName = async (req, res) => {
    try {
      let data = await repository.getByName(req.params.name);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  }),
  (exports.getById = async (req, res) => {
    try {
      let data = await repository.getById(req.params.id);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  }),
  (exports.getByTag = async (req, res) => {
    try {
      let data = await repository.getByTag(req.params.skill);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  }),
  (exports.post = async (req, res) => {
    try {
      await repository.create(req.body);
      res.status(201).send({ message: "Success" });
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  }),
  (exports.put = async (req, res) => {
    try {
      await repository.update(req.params.id, req.body);
      res.status(200).send({ message: "Success" });
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  }),
  (exports.del = async (req, res) => {
    try {
      await repository.del(req.params.id);
      res.status(200).send({ message: "Success" });
    } catch (e) {
      res.status(500).send({ message: "Fail" });
    }
  });
