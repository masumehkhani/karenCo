const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// مسیر ثبت‌نام
router.post("/register", register);

// مسیر ورود
router.post("/login", login);

module.exports = router;
