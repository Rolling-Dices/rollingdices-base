const { Op } = require("sequelize");

const User = require('../models/User');

module.exports = {
  async showBySlug(req, res) {
    const { slug } = req.params;

    console.log(slug)

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
    const { username, name, birth_date, email, password, photo} = req.body;

    const slug = username.toLowerCase().replace(' ', '-');

    const user = await User.create({
      username,
      slug,
      name,
      birth_date,
      email,
      password,
      photo
    });

    return res.json({ user });
  },

}