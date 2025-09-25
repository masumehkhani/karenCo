import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const TopBar = () => {
  return (
    <div className="flex flex-row-reverse md:justify-between justify-center items-center w-full h-20 gap-8 px-4 lg:px-32">
      {/* دکمه ورود / ثبت‌نام */}
      <div className="hidden md:flex gap-1 text-[#124c46] hover:text-[[#046f64]] whitespace-nowrap relative group cursor-pointer">
        <Link to="/register">ثبت نام</Link>
        <span>/</span>
        <Link to="/login">ورود</Link>

        {/* خط زیر کل بخش */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#046f64] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
      </div>

      {/* سرچ باکس → بگیره کل فضای باقیمانده */}
      <div className="hidden md:flex justify-center flex-1">
        <div className=" w-3/4">
         <SearchBox /> 
        </div>
        
      </div>

      {/* لوگو */}
      <div className="flex-shrink-0">
        <Logo />
      </div>
    </div>
  );
};

export default TopBar;
