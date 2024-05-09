const {sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdated} = require("../controllers/users");
const {findAllUsers, findUserById, createUser, deleteUser, updateUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findAllUsers, findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
  );
usersRouter.delete(
    "/users/:id",
    deleteUser,
    sendUserDeleted
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
  ); 

module.exports = usersRouter;