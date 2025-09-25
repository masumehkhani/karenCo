import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderDe = () => {
  return (
    <div className="flex justify-center sm:justify-between items-center h-16 bg-[#cc0000] text-white px-4 lg:px-32 gap-4">
      <ul className="flex gap-2 items-center">
        {/* خانه همیشه دیده میشه */}
        <li className="hidden h-full sm:flex justify-center items-center px-4 hover:bg-[#ee0000]">
          <Link to="/">خانه</Link>
        </li>

        {/* فقط در سایز md به بالا */}
        <li className="hidden md:flex h-full items-center px-4 hover:bg-[#ee0000]">
          <Link to="/products">محصولات</Link>
        </li>
        <li className="hidden md:flex h-full items-center px-4 hover:bg-[#ee0000]">
          <Link to="/about">درباره ما</Link>
        </li>
      </ul>

      {/* تماس با ما همیشه نشون داده میشه */}
      <Link
        to="/contact"
        className="flex gap-2 items-center h-full hover:bg-[#ee0000] px-4"
      >
        تماس با ما
        <AiFillPhone />
      </Link>
    </div>
  );
};

export default HeaderDe;
