const games = require("../models/games");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate("users");
  next();
};

module.exports = findAllGames;
