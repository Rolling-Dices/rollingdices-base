const { Op } = require("sequelize");

const User = require("../models/User");

module.exports = {
  async indexBySlug(req, res) {
    const { slug } = req.params;

    const user = await User.findOne({
      where: {
        slug: {
          [Op.eq]: slug
        }
      }
    });

    return res.json(user);
  },

  async store(req, res) {
    try {
      const { username, name, birth_date, email, password, photo } = req.body;

      const slug = username
        .toLowerCase()
        .replace(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (
        await User.findOne({
          where: { username }
        })
      ) {
        return res
          .status(400)
          .json({ error: "Nome de Usuário já está em uso" });
      }

      if (
        await User.findOne({
          where: { email }
        })
      ) {
        return res.status(400).json({ error: "E-mail já está em uso" });
      }

      const user = await User.create({
        username,
        slug,
        name,
        birth_date,
        email,
        password,
        photo
      });

      return res.json({ msg: "Usuário criado", user });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Erro interno do servidor", msg: err });
    }
  }
};
