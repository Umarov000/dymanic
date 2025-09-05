import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("Xatolik yuz berdi!"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (!user)
    return <h2 className="text-center text-red-500">User not found</h2>;

  return (
    <div className="p-6">
      <div className="max-w-sm mx-auto border rounded-lg p-6 text-center shadow">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-bold mb-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
