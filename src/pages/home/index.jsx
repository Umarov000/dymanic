import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch(() => alert("Xatolik yuz berdi!"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-32 object-contain mb-3"
            />
            <h2 className="font-semibold truncate">{item.title}</h2>
            <p className="text-blue-600 font-bold">{item.price}$</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
