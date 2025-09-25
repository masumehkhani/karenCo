// authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // بررسی اینکه هدر Authorization موجوده و با Bearer شروع شده
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]; // گرفتن توکن

    try {
      // بررسی و decode توکن
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // پیدا کردن یوزر بر اساس id
      req.user = await User.findById(decoded.id).select("-password"); // پسورد رو نمیاریم
      next(); // اجازه ادامه مسیر
    } catch (error) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, no token" });
  }
};
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ success: false, message: "Admin access required" });
  }
};

module.exports ={protect,admin}