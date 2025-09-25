import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] text-gray-800 px-4">
      {/* عدد 404 با انیمیشن */}
      <motion.h1
        className="text-[10rem] font-bold text-[#cc0000] flex items-center gap-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        404
        <AiOutlineExclamationCircle className="text-[4rem] text-[#cc0000]" />
      </motion.h1>

      {/* متن توضیح با fade-in */}
      <motion.h2
        className="text-2xl md:text-4xl font-semibold mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        صفحه مورد نظر پیدا نشد
      </motion.h2>

      <motion.p
        className="text-gray-600 mt-2 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
      </motion.p>

      {/* دکمه بازگشت با انیمیشن hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 bg-[#cc0000] text-white px-6 py-2 rounded-md hover:bg-[#a30000] transition-colors font-semibold inline-block"
        >
          بازگشت به صفحه اصلی
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
