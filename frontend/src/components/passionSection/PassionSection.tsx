
import { FaArrowLeftLong } from "react-icons/fa6";

const PassionSection = () => {
  return (
    <div className="w-full  bg-red-600 flex flex-col  md:flex-row md:justify-between p-4 gap-8 lg:px-32 py-8 text-white">
      <h1 className="w-full  md:w-1/2 text-lg md:text-2xl flex justify-start items-center font-bold border-r-4 border-white pr-4">
        اشتیاق ما
      </h1>
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <p className="text-sm md:text-lg text-justify leading-relaxed tracking-tight">
          در هسته اصلی ما، ما اشتیاق داریم که با مقرون به صرفه کردن وسایل
          الکترونیکی از طریق نیمه هادی ها، دنیایی بهتر ایجاد کنیم. این اشتیاق
          امروز زنده است، زیرا ما همچنان به پیشرفت در مدارهای مجتمع ادامه می
          دهیم. هر نسل از نوآوری بر پایه آخرین نسل است تا فناوری را کوچک‌تر،
          کارآمدتر، قابل اعتمادتر و مقرون به صرفه‌تر کند - بازارهای جدیدی را باز
          می‌کند و این امکان را برای نیمه‌رساناها فراهم می‌کند که در همه جا وارد
          الکترونیک شوند. ما به این به عنوان پیشرفت مهندسی فکر می کنیم.
        </p>
        <div className="mt-4 flex flex-col md:flex-row md:justify-between ">
          <div className="flex flex-row-reverse justify-end items-center gap-2 text-sm cursor-pointer hover:text-[#ffd2d2] transition-colors">
            <span>
              <FaArrowLeftLong />
            </span>
            <span>ما کی هستیم؟</span>
          </div>
          <div className="flex flex-row-reverse justify-end items-center gap-2 text-sm cursor-pointer hover:text-[#ffd2d2] transition-colors">
            <span>
              <FaArrowLeftLong />
            </span>
            <span>اهداف ما چیه؟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassionSection;
