const User = require("../models/User");

module.exports = {

  async authenticate(req, res) {

    try{

    const { email, password } = req.body

    if((email == null || email.trim() == '') || (password == null || password.trim() == ''))
      return res.status(400).json({msg: 'all fields must be filled'})

    const userAuth = await User.findOne({
      where: {email}
    })

    if(!userAuth)
      return res.status(400).json({msg: 'No user found!'})

    if(!await bcryptjs.compare(password, userAuth.password))
      return res.status(400).send({msg: 'Invalid password'});

    res.status(200).json({
      msg:'Login efeutado!',
      userAuth
    })

    } catch(err) {
      console.log(err)
      return res.status(400).json({ msg: 'Unexpected error!' })
    }

  }
}
