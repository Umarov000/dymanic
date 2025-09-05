import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/users", label: "User" },
  { path: "/login", label: "Login" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0EA5E9] to-[#1E293B] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide"
        >
          MyBrand
        </NavLink>
        <nav>
          <ul className="flex gap-4">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#0EA5E9] shadow"
                        : "text-white hover:bg-white/20"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
