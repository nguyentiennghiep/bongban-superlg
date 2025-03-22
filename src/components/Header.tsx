"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-primary">Ping Pong Club</div>

      {/* Navigation Menu */}
      <nav
        className={`absolute md:static top-full right-0 w-full bg-white/80 backdrop-blur-md md:bg-transparent md:flex md:space-x-6 text-lg font-medium shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6">
          {["Trang Chủ", "Ban điều hành", "Đội & VĐV", "Giải", "Tin Tức"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block py-2 px-4 md:px-0 text-gray-700 hover:text-primary transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Login Button & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <button className="bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-hover-primary transition">
          Login
        </button>
      </div>
    </header>
  );
}
