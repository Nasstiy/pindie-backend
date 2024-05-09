const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameDeleted,
  sendGameUpdated,
} = require("../controllers/games");
const {
  findAllGames,
  findGameById,
  createGame,
  deleteGame,
  updateGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
} = require("../middlewares/games");

const gamesRouter = require("express").Router();
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findAllGames, findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
); 
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);

module.exports = gamesRouter;
