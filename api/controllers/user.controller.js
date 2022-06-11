const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient()
exports.createUser = async (req, res) => {
  const { name, phone, username,password } = req.body
  const user = await prisma.users.create({
    data: {
      name,
      phone,
      username,
      password,
    },
  })
  res.json(user)
}


exports.login = async (req, res) => {
  const {username,password} = req.params;
  const user = await prisma.users.findFirst({
    where: {
      'username': username,
      'password': password,
    },
  })
  const token = jwt.sign(
    { user_id: user.id, username,isAdmin: user.isAdmin },
    process.env.TOKEN_KEY,
    {
      expiresIn: "12h",
    }
  );
  user.token = token
  res.json(user)
}
