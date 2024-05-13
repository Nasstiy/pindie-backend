const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryDeleted,
  sendCategoryUpdated,
} = require("../controllers/categoties");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get(
  "/categories/:id",
  findAllCategories,
  findCategoryById,
  sendCategoryById
);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
); 

module.exports = categoriesRouter;
