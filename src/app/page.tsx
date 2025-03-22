"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-primary">
          Ping Pong Club
        </div>

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
      {/* Banner */}
      <div className="relative w-full h-64">
        <Image
          src="https://picsum.photos/1200/300?random=99" // Ảnh banner mock
          alt="Banner Bóng Bàn"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Xếp hạng */}
      {/* Xếp hạng */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Xếp hạng</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="py-3 px-4">Mùa giải</th>
                <th className="py-3 px-4">Vòng đấu</th>
                <th className="py-3 px-4">Tên VĐV</th>
                <th className="py-3 px-4">Xếp hạng</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  season: 2025,
                  round: "Vòng 10",
                  player: "Nguyễn Văn A",
                  rank: 1,
                },
                {
                  season: 2025,
                  round: "Vòng 10",
                  player: "Trần Văn B",
                  rank: 2,
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-200 transition text-gray-700"
                >
                  <td className="py-3 px-4">{item.season}</td>
                  <td className="py-3 px-4">{item.round}</td>
                  <td className="py-3 px-4">{item.player}</td>
                  <td className="py-3 px-4 font-bold text-secondary">
                    {item.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* 05 cây vợt có phong độ tốt nhất */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          05 cây vợt có phong độ tốt nhất
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md text-center border-2 border-primary"
            >
              {/* Ảnh vận động viên 3x4 */}
              <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-gray-200">
                <Image
                  src={`https://picsum.photos/200/267?random=${index + 1}`} // Mock ảnh 3x4
                  alt={`Vận động viên ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-2 font-semibold text-secondary">
                Vận động viên {index + 1}
              </h3>
              <p className="text-gray-600">Phong độ: Xuất sắc</p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Lịch thi đấu tuần kế tiếp
        </h2>
        <div className="bg-white p-4 shadow-md rounded-md border-2 border-primary">
          <p className="text-lg font-medium text-secondary">
            Vòng đấu: <span className="font-bold">Vòng 11</span>
          </p>
          <p className="text-lg font-medium text-secondary mt-2">
            Bảng: <span className="font-bold">Bảng A</span>
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[var(--background)] text-[var(--foreground)] text-center p-6 mt-10 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
          <p>
            SĐT:{" "}
            <a
              href="tel:0123456789"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              0123 456 789
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              facebook.com/yourprofile
            </a>
          </p>
          <p>
            Zalo:{" "}
            <a
              href="https://zalo.me/yourzalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              zalo.me/yourzalo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
