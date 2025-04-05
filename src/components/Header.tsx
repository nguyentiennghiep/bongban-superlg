"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Contact Info Bar */}
      <div className="w-full bg-[#EE344D] py-2">
        <div className="container mx-auto px-6 flex justify-end items-center space-x-6 mr-[85px]">
          <div className="flex items-center space-x-2 text-white">
            <Phone size={16} />
            <span className="font-roboto text-sm leading-[22px]">
              +84 123 456 789
            </span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Mail size={16} />
            <span className="font-roboto text-sm leading-[22px]">
              contact@example.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
        {/* Logo */}
        <Image src={"/Logo_HaNoiSPL.png"} alt="" width={100} height={100} />
        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-full flex w-full items-start justify-end bg-white/80 backdrop-blur-md md:bg-transparent md:flex text-base font-semibold shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50 mr-[80px] ${
            menuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-12">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/executive-board"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Ban điều hành
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Tin Tức
              </Link>
            </li>
            <li>
              <Link
                href="/players-teams"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Đội bóng và Vận động viên
              </Link>
            </li>
            <li>
              <Link
                href="/tournaments"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Giải đấu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 md:px-0 text-[#212529] hover:text-[#EE344D] transition leading-6"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center">
          <button
            className="md:hidden text-[#212529] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
}
