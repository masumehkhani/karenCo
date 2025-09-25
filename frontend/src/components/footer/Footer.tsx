import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2e2e2e] text-white py-12 px-4 lg:px-32 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* بخش برند */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#ed6d6d] mb-4">شرکت کنترل فرمان آسانسور</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            تولیدکننده‌ی تابلو فرمان‌های هوشمند آسانسور با تمرکز بر ایمنی، کیفیت و نوآوری. ما همراه مهندسان ساختمان برای آینده‌ای بهتر گام برمی‌داریم.
          </p>
        </div>

        {/* لینک‌های سریع */}
        <div className="flex-1">
          <h3 className="text-[#cccccc] font-semibold mb-4">لینک‌های سریع</h3>
          <ul className="flex flex-col gap-4 text-sm md:gap-2">
            <li><Link to="/" className="hover:text-[#ed6d6d] block py-2">خانه</Link></li>
            <li><Link to="/products" className="hover:text-[#ed6d6d] block py-2">محصولات</Link></li>
            <li><Link to="/about" className="hover:text-[#ed6d6d] block py-2">درباره ما</Link></li>
            <li><Link to="/contact" className="hover:text-[#ed6d6d] block py-2">تماس با ما</Link></li>
          </ul>
        </div>

        {/* تماس با ما */}
        <div className="flex-1">
          <h3 className="text-[#cccccc] font-semibold mb-4">راه‌های ارتباطی</h3>
          <ul className="text-sm text-gray-300 flex flex-col gap-3">
            <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>ایمیل: info@yourcompany.com</li>
            <li>آدرس: تهران، خیابان مثال، پلاک ۱۰</li>
          </ul>
        </div>
      </div>

      {/* خط جداکننده و کپی‌رایت */}
      <div className="w-full border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} شرکت کنترل فرمان آسانسور. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
