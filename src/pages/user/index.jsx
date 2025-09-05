import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch(() => alert("Xatolik yuz berdi!"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="border rounded-lg p-4 text-center hover:shadow-md transition"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
            />
            <h2 className="font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-600">Age: {user.age}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
