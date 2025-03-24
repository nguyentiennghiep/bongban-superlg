"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <Image src={"/Logo_HaNoiSPL.png"} alt="" width={100} height={100} />
      {/* Navigation Menu */}
      <nav
        className={`absolute md:static top-full flex w-full items-center justify-between bg-white/80 backdrop-blur-md md:bg-transparent md:flex md:space-x-6 text-lg font-medium shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#0077B6] transition "
            >
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link
              href="/executive-board"
              className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#0077B6] transition"
            >
              Ban điều hành
            </Link>
          </li>
          <li>
            <Link
              href="/player-list"
              className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#0077B6] transition"
            >
              Đội & VĐV
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#0077B6] transition"
            >
              Giải
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#0077B6] transition"
            >
              Tin Tức
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login Button & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden text-[#212529] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <button className="bg-[#0077B6] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#005F8C] transition">
          Login
        </button>
      </div>
    </header>
  );
}
