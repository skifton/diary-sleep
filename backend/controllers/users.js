const Users = require("../models/users.model.js");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const removeUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const deletedUser = await Users.destroy({ where: { id: id } });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.json({ error });
  }
};

const Register = async (req, res) => {
  const { name, surname, email, bDay, password } = req.body;
  const existingUser = await Users.findOne({ where: { email: email } });
  if (existingUser)
    return res.status(500).json({ error: "This Email already exist." });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  const user_id = uuid.v1();
  try {
    await Users.create({
      id: user_id,
      name: name,
      surname: surname,
      bDay: bDay,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    res.json(error);
  }
};

const Login = async (req, res, next) => {
  // try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user)
      return res.status(400).send({ error: "Incorrect email or password." });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match)
      return res.status(400).send({ error: "Incorrect email or password." });
    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: req.body.isRemember ? "15d" : "3d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).send({
      accessToken,
      refreshToken,
    });
  // } catch (error) {
  //   res.json({ error });
  // }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = { getUsers, Register, Login, Logout, removeUser };
