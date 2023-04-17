const express = require("express");
const Users = require("../controllers/users.js");
const Middleware = require("../middleware/refreshToken.js");
const usersRouter = express.Router();

usersRouter.get("/users", Users.getUsers);
usersRouter.post("/users", Users.Register);
usersRouter.post("/login", Users.Login);
usersRouter.delete("/logout", Users.Logout);
usersRouter.post("/token", Middleware.refreshToken);
usersRouter.delete("/users/:userId", Users.removeUser)

module.exports = usersRouter;