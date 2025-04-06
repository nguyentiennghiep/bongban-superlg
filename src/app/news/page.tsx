"use client";

import Link from "next/link";
import NewsItem from "../components/NewsItem";

const newsData = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 4,
    image: "/images/news-4.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 5,
    image: "/images/news-2.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 6,
    image: "/images/news-3.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
  {
    id: 7,
    image: "/images/news-4.jpg",
    title: "Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025",
    date: "Đăng vào lúc 2025-03-19 19:17:26",
    description: "DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Title */}
        <h1 className="text-xl sm:text-[24px] font-[600] text-black text-center mb-6 sm:mb-8">
          Tin tức & sự kiện
        </h1>

        {/* Featured News */}
        <div className="mb-6 sm:mb-8">
          <NewsItem {...newsData[0]} featured />
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsData.slice(1).map((news) => (
            <NewsItem key={news.id} {...news} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 sm:mt-8 gap-2">
          <Link
            href="/news?page=1"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#DFDFDF] text-[#666666] hover:border-[#FF1654] hover:text-[#FF1654]"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M9.99998 13.2799L5.65331 8.93324C5.13998 8.41991 5.13998 7.57991 5.65331 7.06657L9.99998 2.71991"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="/news?page=1"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-[#FF1654] text-white text-sm sm:text-base"
          >
            1
          </Link>
          <Link
            href="/news?page=2"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#DFDFDF] text-[#666666] hover:border-[#FF1654] hover:text-[#FF1654] text-sm sm:text-base"
          >
            2
          </Link>
          <Link
            href="/news?page=3"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#DFDFDF] text-[#666666] hover:border-[#FF1654] hover:text-[#FF1654] text-sm sm:text-base"
          >
            3
          </Link>
          <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#666666] text-sm sm:text-base">
            ...
          </span>
          <Link
            href="/news?page=10"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#DFDFDF] text-[#666666] hover:border-[#FF1654] hover:text-[#FF1654] text-sm sm:text-base"
          >
            10
          </Link>
          <Link
            href="/news?page=2"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#DFDFDF] text-[#666666] hover:border-[#FF1654] hover:text-[#FF1654]"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 13.2799L10.3467 8.93324C10.86 8.41991 10.86 7.57991 10.3467 7.06657L6 2.71991"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
