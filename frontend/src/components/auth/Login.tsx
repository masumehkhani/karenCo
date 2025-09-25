import { IoReturnUpBack } from "react-icons/io5";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import Password from "../auth/password";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="container max-w-xs lg:max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto bg-white p-6 mt-16 lg:mt-20 rounded-lg lg:mb-36 border border-gray-200">
      <Link to={"/"}>
        <span className="text-2xl text-gray-700 cursor-pointer">
          <IoReturnUpBack />
        </span>
      </Link>

      <h1 className="text-2xl font-bold text-center text-gray-800">
        سلام خوش آمدید
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="my-6">
        {/* فیلد ایمیل */}
        <div className="flex flex-col gap-y-1 mb-4">
          <label htmlFor="email" className="text-gray-700">
            ایمیل
          </label>
          <input
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-[#cc0000] focus:ring-0 focus:outline-none"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm">پر کردن این فیلد الزامی است</p>
          )}
        </div>

        {/* فیلد پسورد */}
        <div className="mb-6">
          <Password register={register} required={true} minLength={4}>
            فراموش کرده‌اید؟
          </Password>
          {errors.password?.type === "required" && (
            <p className="text-red-600 text-sm">پر کردن این فیلد الزامی است</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 text-sm">تعداد کاراکترها کافی نیست</p>
          )}
        </div>

        {/* دکمه ورود */}
        <button
          type="submit"
          className="bg-[#cc0000] w-full rounded-md px-6 text-white py-2 hover:bg-[#a30000] transition-colors duration-300 font-semibold"
        >
          وارد شوید
        </button>

        {/* لینک ثبت‌نام */}
        <p className="text-sm text-center pt-6 text-gray-700">
          حساب ندارید؟{" "}
          <Link
            to="/register"
            className="text-[#cc0000] hover:text-[#a30000] transition-colors duration-300"
          >
            ثبت‌نام
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
