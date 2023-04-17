const jwt = require('jsonwebtoken');
const Users = require("../models/users.model.js");

const refreshToken = async (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.status(401);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(403).send();
    const userr = await Users.findOne({
      where: {
        email: user?.email,
      },
    });
    const accessToken = jwt.sign(
      { userId: userr.id, name: user.name, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );
    res.json({ accessToken });
  });
};

module.exports = {
  refreshToken,
};
