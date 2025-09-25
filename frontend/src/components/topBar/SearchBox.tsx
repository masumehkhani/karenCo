import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const clearValue = () => setValue("");

  return (
    <div className="flex items-center w-full border border-gray-400 rounded-md bg-white px-4 py-3">
      {/* آیکن سرچ */}
      <IoSearchOutline className="w-5 h-5 text-gray-500" />
      {/* ورودی جستجو */}
      <input
        type="search"
        name="search"
        placeholder="جستجو..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-grow text-right outline-none bg-transparent"
      />

      {/* آیکن ضربدر اختصاصی */}
      <AnimatePresence>
        {value && (
          <motion.span
            key="clear-icon"
            onClick={clearValue}
            className="ml-2 text-gray-400 cursor-pointer hover:text-gray-600"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.1 }}
          >
            <IoIosClose className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;
