"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Contact Info Bar */}
      <div className="w-full bg-[#EE344D] py-2">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-center sm:justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2 text-white">
            <Phone size={16} />
            <span className="font-roboto text-sm leading-[22px]">
              0965 661 888
            </span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Mail size={16} />
            <span className="font-roboto text-sm leading-[22px]">
              bdhhanoispl@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
          <Image
            src={"/Logo_HaNoiSPL.png"}
            alt="Hanoi SPL Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-full left-0 right-0 flex w-full items-start justify-end bg-white/80 backdrop-blur-md md:bg-transparent md:flex text-base font-semibold shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50 transform ${
            menuOpen
              ? "flex flex-col translate-y-0 opacity-100"
              : "hidden md:flex md:translate-y-0 md:opacity-100 -translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 w-full md:w-auto pr-4 md:pr-8 lg:pr-12 transition-transform duration-300 ease-in-out">
            <li className="w-full md:w-auto">
              <Link
                href="/"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/" ? "text-[#EE344D]" : "text-[#212529]"
                }`}
              >
                Trang chủ
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/about"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/about" ? "text-[#EE344D]" : "text-[#212529]"
                }`}
              >
                Giới thiệu
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/executive-board"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/executive-board"
                    ? "text-[#EE344D]"
                    : "text-[#212529]"
                }`}
              >
                Ban điều hành
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/news"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/news" ? "text-[#EE344D]" : "text-[#212529]"
                }`}
              >
                Tin Tức
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/players-teams"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/players-teams"
                    ? "text-[#EE344D]"
                    : "text-[#212529]"
                }`}
              >
                Đội bóng và Vận động viên
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/schedule-ranking"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/schedule-ranking"
                    ? "text-[#EE344D]"
                    : "text-[#212529]"
                }`}
              >
                Lịch thi đấu và Bảng xếp hạng
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/contact"
                className={`block py-2 px-4 md:px-0 hover:text-[#EE344D] transition leading-6 ${
                  pathname === "/contact" ? "text-[#EE344D]" : "text-[#212529]"
                }`}
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#212529] focus:outline-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>
    </>
  );
}
