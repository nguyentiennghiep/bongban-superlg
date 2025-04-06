"use client";

import Link from "next/link";
import Image from "next/image";

// interface NewsDetailPageProps {
//   params: {
//     id: string;
//   };
// }

export default function NewsDetailPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Chi tiết tin tức
      </h1>
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
            <Link href="/" className="text-black">
              Trang chủ
            </Link>
            <span className="text-black">/</span>
            <Link href="/news" className="text-black">
              Tin tức
            </Link>
            <span className="text-black">/</span>
            <span className="text-black">Chi tiết</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main News Content */}
            <div className="lg:col-span-2">
              <article className="mb-8 sm:mb-12">
                <div className="mb-3">
                  <span className="text-[#666666] text-[11px] sm:text-[12px]">
                    Đăng vào lúc 2025-03-19 19:17:26
                  </span>
                </div>
                <h1 className="text-xl sm:text-[24px] font-[600] mb-4 text-black">
                  Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
                </h1>
                <div className="mb-4">
                  <Image
                    src="/images/news-1.jpg"
                    alt="Điều lệ giải bóng bàn"
                    width={800}
                    height={450}
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#333333] mb-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
                <p className="text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#333333] mb-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 mb-4 text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#333333]">
                  <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </li>
                  <li>Aenean commodo ligula eget dolor.</li>
                  <li>Aenean massa.</li>
                  <li>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes,
                  </li>
                </ul>
                <p className="text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#333333]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
              </article>
            </div>

            {/* Featured News Sidebar */}
            <div>
              <h2 className="text-lg sm:text-[20px] font-[600] mb-4 sm:mb-6 text-black">
                Tin nổi bật khác
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {/* Featured News Item */}
                <div className="group">
                  <div className="mb-3">
                    <Image
                      src="/images/news-1.jpg"
                      alt="Tin tức bóng bàn"
                      width={400}
                      height={225}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-[#666666] text-[11px] sm:text-[12px]">
                      Đăng vào lúc 2025-03-19 19:17:26
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-[16px] font-[600] group-hover:text-[#FF1654]">
                    <Link href="/news/2" className="text-black">
                      Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
                    </Link>
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs sm:text-[14px] text-[#666666]">
                      DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025
                    </p>
                  </div>
                  <div className="mt-2">
                    <Link
                      href="/news/2"
                      className="text-[#FF1654] text-xs sm:text-[14px] hover:underline"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>

                {/* Featured News Item */}
                <div className="group">
                  <div className="mb-3">
                    <Image
                      src="/images/news-1.jpg"
                      alt="Tin tức bóng bàn"
                      width={400}
                      height={225}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-[#666666] text-[11px] sm:text-[12px]">
                      Đăng vào lúc 2025-03-19 19:17:26
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-[16px] font-[600] group-hover:text-[#FF1654]">
                    <Link href="/news/3" className="text-black">
                      Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
                    </Link>
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs sm:text-[14px] text-[#666666]">
                      DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025
                    </p>
                  </div>
                  <div className="mt-2">
                    <Link
                      href="/news/3"
                      className="text-[#FF1654] text-xs sm:text-[14px] hover:underline"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>

                {/* Featured News Item */}
                <div className="group">
                  <div className="mb-3">
                    <Image
                      src="/images/news-1.jpg"
                      alt="Tin tức bóng bàn"
                      width={400}
                      height={225}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-[#666666] text-[11px] sm:text-[12px]">
                      Đăng vào lúc 2025-03-19 19:17:26
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-[16px] font-[600] group-hover:text-[#FF1654]">
                    <Link href="/news/4" className="text-black">
                      Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
                    </Link>
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs sm:text-[14px] text-[#666666]">
                      DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025
                    </p>
                  </div>
                  <div className="mt-2">
                    <Link
                      href="/news/4"
                      className="text-[#FF1654] text-xs sm:text-[14px] hover:underline"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
    </div>
  );
}
