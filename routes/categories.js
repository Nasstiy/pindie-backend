const sendAllCategories = require("../controllers/categoties");
const findAllCategories = require("../middlewares/categories");

const categoriesRouterRouter = require("express").Router();

categoriesRouterRouter.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRouterRouter;