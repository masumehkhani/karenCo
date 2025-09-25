import logo from "../../assets/images/logo/karen.png";
const Logo = () => {
  return (
    <div className="flex  justify-center text-center gap-4  lg:ml-5">
      <div className="flex flex-col justify-center  items-center">
        <img className="w-8" src={logo} alt="logo" />
        <span className="text-sm font-peyda">karen</span>
      </div>
      <p className=" font-peyda font-black text-sm sm:text-lg flex justify-center items-center">شرکت آرمان الکترونیک کارن</p>

    </div>
  );
};

export default Logo;
