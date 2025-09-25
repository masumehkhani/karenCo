const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middlewares/authMiddleware");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// مسیرهای عمومی
router.get("/", getProducts);
router.get("/:id", getProductById);

// مسیرهای فقط ادمین
router.post("/", protect, admin, addProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;
