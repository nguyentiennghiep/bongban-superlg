import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3]">
      <div className="container mx-auto px-6 pb-12 pt-12">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/Logo_HaNoiSPL.png"
            alt="Hanoi SPL Logo"
            width={80}
            height={80}
            className="mb-2"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://www.facebook.com/people/Hanoi-Super-League-Victas-tour/61574585212158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://www.youtube.com/@HaNoiSuperLeagueVictastour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/youtube.png"
              alt="YouTube"
              width={24}
              height={24}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-8 text-sm text-black">
          <Link href="/" className="hover:text-[#EE344D]">
            Trang chủ
          </Link>
          <Link href="/about" className="hover:text-[#EE344D]">
            Giới thiệu
          </Link>
          <Link href="/executive-board" className="hover:text-[#EE344D]">
            Ban điều hành
          </Link>
          <Link href="/news" className="hover:text-[#EE344D]">
            Tin tức
          </Link>
          <Link href="/players-teams" className="hover:text-[#EE344D]">
            Đội bóng và vận động viên
          </Link>
          <Link href="/schedule-ranking" className="hover:text-[#EE344D]">
            Lịch thi đấu và Bảng xếp hạng
          </Link>
          <Link href="/contact" className="hover:text-[#EE344D]">
            Liên hệ
          </Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t-2 border-[#D8D8D8]">
        <div className="container mx-auto px-6 pt-8 pb-12">
          <div className="text-center text-sm text-[#999999]">
            HANOI SUPERLEAGUE 2025 © All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
