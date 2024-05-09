const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryDeleted,
  sendCategoryUpdated,
} = require("../controllers/categoties");
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
  createCategory,
  sendCategoryCreated
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
); 

module.exports = categoriesRouter;
