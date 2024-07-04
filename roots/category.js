const express = require("express")
const router = express.Router()
const CategoryController = require("../controller/category")

router.get("/",CategoryController.getCategoryAll)
router.get("/:id",CategoryController.getCategoryById)
router.post("/",CategoryController.createCategory)
router.put("/:id",CategoryController.updateCategory)
router.delete("/:id",CategoryController.deleteCategory)

module.exports = router;