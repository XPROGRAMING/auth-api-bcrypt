const bcrypt = require('bcrypt');
const hashPassword = (req, res, next) => {
  const { senha } = req.body;
  const hashedPassword = bcrypt.hashSync(senha, 10);
  req.body.senha = hashedPassword;
  next();
};

module.exports = hashPassword;