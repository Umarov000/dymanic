import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => alert("Xatolik yuz berdi!"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (!product)
    return <h2 className="text-center text-red-500">Product not found</h2>;

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-contain mb-6"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600">{product.price}$</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
