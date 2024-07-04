const express = require("express")
const router = express.Router()
const ProductController = require("../controller/product")

router.get("/",ProductController.getProductAll)
router.get("/:id",ProductController.getProductById)
router.post("/",ProductController.createProduct)
router.put("/:id",ProductController.updateProduct)
router.delete("/:id",ProductController.deleteProduct)
module.exports  = router