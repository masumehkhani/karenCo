const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// تعریف اسکیمای یوزر
const userSchema = mongoose.Schema({
  username: { type: String, required: true, minlength: 3, unique: true }, // نام کاربری یکتا
  email: { type: String, required: true, unique: true }, // ایمیل یکتا
  password: { type: String, required: true, minlength: 5 }, // پسورد (بعداً هش میشه)
  role: { type: String, enum: ["user", "admin"], default: "user" }, // نقش کاربر
});

// قبل از ذخیره یوزر، پسورد رو هش می‌کنیم
userSchema.pre("save", async function (next) {
  // فقط وقتی پسورد تغییر کرده باشه هش بشه
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10); // تولید salt
    this.password = await bcrypt.hash(this.password, salt); // هش پسورد
    next();
  } catch (error) {
    next(error);
  }
});

// متدی برای مقایسه پسورد ورودی با پسورد هش‌شده
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ساخت مدل User
const User = mongoose.model("User", userSchema);

module.exports = User;
