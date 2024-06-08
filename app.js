require('dotenv').config()
const express = require("express");
const app = express();
const db = require("./ConfigDB");
const User = require("./Models/Banco");
const hashPassword = require("./Middlewares/hashPassword");
const {generateToken, authenticateToken} = require("./Middlewares/authService")
const bcrypt = require('bcrypt')
const cors = require('cors')

app.use(cors({
  origin: "*"
}));

app.use(express.json());
db.sync();

app.get("/", (req, res) => {
  res.send("Trabalho allan");
});

app.post("/registro", hashPassword, async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.send("Bem-sucedido");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  const passwordMatch = bcrypt.compareSync(senha, user.senha);
  if (!passwordMatch) {
    return res.status(401).send("Invalid email or password");
  }
  const token = generateToken(user.dataValues);
  delete user.dataValues.senha;
  res.send({ user, token });
});

app.get("/users", authenticateToken, async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(3000, () => console.log("api rondando"));
