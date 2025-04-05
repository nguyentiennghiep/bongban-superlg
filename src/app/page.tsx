"use client";
import Image from "next/image";
import Link from "next/link";
import Ranking from "./components/Ranking";
import TopPlayers from "./components/TopPlayers";
import MatchSchedule from "./components/MatchSchedule";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-[440px]">
        <Image
          src="/background-top.jpg"
          alt="Banner Bóng Bàn"
          fill
          className="object-contain"
          priority
          quality={100}
        />
        {/* Tham Gia Button */}
        <button className="absolute left-1/2 -translate-x-1/2 -bottom-[66px] w-[144px] h-[144px] rounded-full bg-[#EE344D] border-6 border-[#FFF5F5] text-white font-semibold text-[30px] leading-[38px] text-center flex items-center justify-center hover:bg-[#d62e43] transition-colors">
          THAM GIA
        </button>
      </div>

      {/* Giới thiệu về chúng tôi */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-black text-3xl font-bold mb-4">
              Giới thiệu về chúng tôi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Câu lạc bộ bóng bàn HANOI SUPERLEAGUE là nơi giao lưu, rèn luyện
              và phát triển kỹ năng bóng bàn dành cho mọi lứa tuổi và trình độ.
              Với môi trường năng động, trang thiết bị hiện đại và đội ngũ huấn
              luyện viên giàu kinh nghiệm.
            </p>
            <p className="text-gray-700 leading-relaxed">
              CLB không chỉ giúp nâng cao kỹ thuật mà còn tạo cơ hội kết nối
              cộng đồng đam mê môn thể thao này. Hãy tham gia cùng chúng tôi để
              cùng rèn luyện sức khỏe và chinh phục những thử thách mới!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/intro-1.jpg"
                alt="Người chơi bóng bàn"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/intro-2.jpg"
                alt="Thiết bị bóng bàn"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tin tức & sự kiện */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-[32px] font-bold mb-8 text-black">
          Tin tức & sự kiện
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured News */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden group">
              <Link href="/news/1">
                <Image
                  src="/images/news-1.jpg"
                  alt="Điều lệ giải bóng bàn"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
              </h3>
              <p className="text-sm text-gray-600">
                DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Đăng vào lúc 2025-03-19 19:17:26
              </p>
              <span className="inline-block mt-3 text-[#00A3FF] hover:underline">
                Xem thêm
              </span>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                href={`/news/${item}`}
                className="block bg-[#F3F3F3] rounded-lg overflow-hidden hover:bg-gray-100 transition-colors"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    Điều lệ giải bóng bàn Hà Nội Superleague mùa giải 2025
                  </h3>
                  <p className="text-sm text-gray-600">
                    DỰ THẢO ĐIỀU LỆ GIẢI BÓNG BÀN HÀ NỘI SUPERLEAGUE 2025
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Đăng vào lúc 2025-03-19 19:17:26
                  </p>
                  <span className="inline-block mt-3 text-[#00A3FF] hover:underline">
                    Xem thêm
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Xếp hạng */}
      <Ranking />

      {/* Các cây vợt có phong độ tốt nhất */}
      <TopPlayers />

      {/* Lịch thi đấu tuần kế tiếp */}
      <div className="container mx-auto px-6 pb-10">
        <MatchSchedule />
      </div>
    </div>
  );
}
