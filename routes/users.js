const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserDeleted,
  sendUserUpdated,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  hashPassword,
} = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findAllUsers, findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
