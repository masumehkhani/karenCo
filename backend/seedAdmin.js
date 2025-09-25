require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const User = require("./models/User");

connectDB();

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin1@example.com" });
    if (!adminExists) {
      const admin = new User({
        username: "admin1",
        email: "admin1@example.com",
        password: "admin123",
        role: "admin"
      });
      await admin.save();
      console.log("Admin user created successfully");
    } else {
      console.log("Admin already exists");
    }
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
