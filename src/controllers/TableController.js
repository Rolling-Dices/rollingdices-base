const Table = require("../models/Table");

module.exports = {
  async store(req, res) {
    const { name, description, master_id } = req.body;

    const table = await Table.create({
      name,
      description,
      master_id
    });

    return res.json({ table });
  }
};
