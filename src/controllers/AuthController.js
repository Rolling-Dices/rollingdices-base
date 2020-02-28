const User = require("../models/User");

const bcryptjs = require("bcryptjs");

module.exports = {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      if (!email && email.trim() == "")
        return res.status(400).json({ error: "Informe seu e-mail" });

      if (password && password.trim() == "")
        return res.status(400).json({ error: "Informe sua senha" });

      const userAuth = await User.findOne({
        where: { email }
      });

      if (!userAuth)
        return res.status(400).json({ error: "Usuário não encontrado" });

      if (!(await bcryptjs.compare(password, userAuth.password)))
        return res.status(400).send({ error: "Senha inválida" });

      res.status(200).json({
        msg: "Login efeutado!",
        userAuth
      });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Erro interno do servidor", msg: err });
    }
  }
};
