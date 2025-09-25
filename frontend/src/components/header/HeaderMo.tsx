import { AiFillHome, AiOutlineAppstore, AiOutlineUser, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderMo = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // بستن dropdown وقتی خارج از آن کلیک شود
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-row-reverse justify-around items-center bg-[#cc0000] h-16 text-white px-4 relative">
      
      {/* خانه */}
      <Link
        to="/"
        className="flex justify-center items-center h-full hover:bg-[#ee0000] transition-all duration-200 rounded cursor-pointer"
      >
        <AiFillHome className="w-6 h-6" />
      </Link>

      {/* محصولات */}
      <Link
        to="/products"
        className="flex justify-center items-center h-full hover:bg-[#ee0000] transition-all duration-200 rounded cursor-pointer"
      >
        <AiOutlineAppstore className="w-6 h-6" />
      </Link>

      {/* لاگین/ثبت‌نام با dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer hover:bg-[#ee0000] transition-all duration-200"
          onClick={() => setLoginOpen(!loginOpen)}
        >
          <AiOutlineUser className="w-6 h-6" />
        </div>

        <AnimatePresence>
          {loginOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[-80px] w-36 bg-white text-black shadow-lg rounded-md flex flex-col right-0 z-50"
            >
              <Link
                to="/register"
                className="px-4 py-2 hover:bg-gray-100 relative group cursor-pointer"
              >
                ثبت نام
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 hover:bg-gray-100 relative group cursor-pointer"
              >
                ورود
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* تماس با ما */}
      <Link
        to="/contact"
        className="flex justify-center items-center h-full hover:bg-[#ee0000] transition-all duration-200 rounded cursor-pointer"
      >
        <AiFillPhone className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default HeaderMo;
