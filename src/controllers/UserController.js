const User = require('../models/User');

module.exports = {
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