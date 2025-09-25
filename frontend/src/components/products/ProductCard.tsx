import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;       // شناسه محصول
  image: string;
  name: string;
  drive: string;    // درایو محصول
  power: number;    // توان محصول
}

const ProductCard: React.FC<Props> = ({ id, image, name, drive, power }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full max-w-[90%] sm:max-w-[340px] mx-auto flex flex-col justify-center border border-gray-200 p-4 hover:border-[#ed6d6d] gap-4 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.005]"
    >
      <span className="text-[#db2c00] font-semibold">جدید</span>

      <div className="w-full aspect-[1/1] relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-[#007c9b] text-lg font-bold">{name}</h1>
        <p className="text-[#555555] text-lg">
          {drive} - {power} وات
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
