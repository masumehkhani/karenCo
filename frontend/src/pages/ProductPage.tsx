import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import MainLayout from "../layouts/MainLayout";

interface Product {
  _id: string;
  name: string;
  image: string;
  drive: string;
  power: number;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // فراخوانی API برای گرفتن تمام محصولات
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MainLayout>
      <div className="px-4 py-10 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">تمام محصولات</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            drive={product.drive}
            power={product.power}
          />
        ))}
      </div>
    </div>
    </MainLayout>
    
  );
};

export default ProductsPage;
