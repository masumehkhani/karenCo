import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface Product {
  _id: string;
  name: string;
  image: string;
  drive: string;
  power: number;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProduct(data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return <p className="text-center mt-10">در حال بارگذاری محصول...</p>;

  return (
    <MainLayout>
      <div className="max-w-[800px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 aspect-[1/1] overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-[#007c9b]">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">درایو:</span> {product.drive}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">توان:</span> {product.power} وات
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
