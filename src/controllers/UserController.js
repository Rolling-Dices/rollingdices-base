const { Op } = require("sequelize");

const User = require("../models/User");

const bcryptjs = require('bcryptjs')

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

    try{

    const { username, name, birth_date, email, password, photo } = req.body;

    const slug = username
      .toLowerCase()
      .replace(" ", "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if(await User.findOne({
      where: {username}
    })){
      console.log("username is already being used")
      return res.status(400).json({msg: 'username is already being used'})
    }

    if(await User.findOne({
      where: {email}
    })){
      console.log("email is already being used")
      return res.status(400).json({msg: 'email is already being used'})
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

    return res.json({ msg: 'User created!', user });

  } catch(err){
    console.log(err)
    return res.status(400).json({ msg: 'Unexpected error!' })
  }

  }

};
