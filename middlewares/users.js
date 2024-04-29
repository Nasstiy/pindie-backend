const users = require("../models/users");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({})
    next();
};

module.exports = findAllUsers;