const User = require("../models/User");
const jwt = require("jsonwebtoken"); // برای ساخت توکن JWT

// =====================
// ثبت‌نام کاربر
// =====================
const register = async (req, res) => {
  const { username, email, password } = req.body;

  // بررسی اینکه همه فیلدهای ضروری ارسال شده باشه
  if (!username || !email || !password)
    return res.status(400).json({ message: "All the fields are necessary!" });

  try {
    // بررسی اینکه یوزر با همان ایمیل یا نام کاربری قبلا وجود داشته باشه
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // ساخت یک یوزر جدید (پسورد خودش هش می‌شود به خاطر pre save در مدل)
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();

    // حذف پسورد از خروجی قبل از فرستادن به کلاینت
    const { password: _, ...userData } = savedUser.toObject();

    // پاسخ موفقیت‌آمیز به کلاینت
    res.status(201).json({ success: true, data: userData });
  } catch (error) {
    // هندل خطاهای سرور
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================
// ورود کاربر
// =====================
const login = async (req, res) => {
  const { email, password } = req.body;

  // بررسی اینکه ایمیل و پسورد ارسال شده باشند
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });

  try {
    // پیدا کردن یوزر بر اساس ایمیل
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });

    // مقایسه پسورد وارد شده با پسورد هش شده در دیتابیس
    const isMatch = await existingUser.comparePassword(password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });

    // ساخت JWT شامل id و نقش کاربر
    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    // حذف پسورد از خروجی قبل از فرستادن به کلاینت
    const { password: _, ...userData } = existingUser.toObject();

    // ارسال پاسخ موفقیت‌آمیز به کلاینت شامل اطلاعات یوزر و توکن
    res.status(200).json({ success: true, data: { user: userData, token } });
  } catch (error) {
    // هندل خطاهای سرور
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register, login };
