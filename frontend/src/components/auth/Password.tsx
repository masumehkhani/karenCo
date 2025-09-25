import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import type { ReactNode } from "react";
import { useState } from "react";
import type { UseFormRegister } from "react-hook-form";

interface FormValues {
  name?: string;
  email: string;
  password: string;
}

interface Props {
  register: UseFormRegister<FormValues>;
  required: boolean;
  minLength: number;
  children?: ReactNode;
}

const Password = ({ register, required, minLength, children }: Props) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-y-1 mb-4">
      <div className="flex justify-between items-center">
        <label htmlFor="password" className="text-gray-700">
          پسورد
        </label>
        {children && (
          <a className="text-xs text-gray-600 hover:text-[#cc0000] cursor-pointer transition-colors duration-200">
            {children}
          </a>
        )}
      </div>

      <div className="relative">
        <input
          className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-[#cc0000] focus:ring-0 focus:outline-none"
          type={passwordIsVisible ? "text" : "password"}
          id="password"
          {...register("password", { required, minLength })}
        />
        <span
          onClick={() => setPasswordIsVisible(!passwordIsVisible)}
          className="absolute top-2 left-2 text-gray-400 text-2xl hover:text-gray-600 hover:cursor-pointer transition-colors duration-200"
        >
          {passwordIsVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </span>
      </div>
    </div>
  );
};

export default Password;
