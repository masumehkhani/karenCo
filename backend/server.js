// server.js
// ایمپورت پکیج‌ها
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ایمپورت تابع اتصال به MongoDB
const connectDB = require("./config/db");

// ساخت اپلیکیشن Express
const app = express();

// Middlewareها
app.use(cors());         // اجازه دسترسی از فرانت‌اند
app.use(express.json());  // اجازه دریافت JSON در بدنه درخواست‌ها

app.use(express.static("public"));
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        _id: "1",
        name: "محصول ۱",
        drive: "AC",
        power: 1200,
        image: "/images/IMG_0252_1_-removebg-preview.png",
      },
      {
        _id: "2",
        name: "محصول ۲",
        drive: "DC",
        power: 900,
        image: "/images/IMG_0254-removebg-preview.png",
      },
      {
        _id: "3",
        name: "محصول ۳",
        drive: "AC",
        power: 1500,
        image: "/images/IMG_0255-removebg-preview.png",
      },
      {
        _id: "4",
        name: "محصول ۴",
        drive: "DC",
        power: 700,
        image: "/images/IMG_0264-removebg-preview.png",
      },
    ],
  });
});


// اتصال به MongoDB
connectDB();

// پورت سرور
const port = process.env.PORT || 3000;

// app.use('/api/products',require('./routes/productRoutes'))
app.use("/api/auth", require("./routes/authRoutes"));

// راه‌اندازی سرور
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
