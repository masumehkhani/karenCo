import HeaderDe from "../header/HeaderDe";
import HeaderMo from "../header/HeaderMo";

const Header = () => {
  return (
    <div className="h-16">
      <div className="hidden md:block">
        <HeaderDe />
      </div>
      <div className="block md:hidden">
        <HeaderMo />
      </div>
    </div>
  );
};

export default Header;
