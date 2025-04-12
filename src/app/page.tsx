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
      <div className="relative w-full h-[300px] sm:h-[440px]">
        <Image
          src="/background-top.jpg"
          alt="Banner Bóng Bàn"
          fill
          className="object-contain"
          priority
          quality={100}
        />
        {/* Tham Gia Button */}
        <button className="absolute left-1/2 -translate-x-1/2 -bottom-[66px] w-[100px] h-[100px] sm:w-[144px] sm:h-[144px] rounded-full bg-[#EE344D] border-4 sm:border-6 border-[#FFF5F5] text-white font-semibold text-[20px] sm:text-[30px] leading-[24px] sm:leading-[38px] text-center flex items-center justify-center hover:bg-[#d62e43] transition-colors">
          THAM GIA
        </button>
      </div>

      {/* Giới thiệu về chúng tôi */}
      <section className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4">
              Giới thiệu về chúng tôi
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Câu lạc bộ bóng bàn HANOI SUPERLEAGUE là nơi giao lưu, rèn luyện
              và phát triển kỹ năng bóng bàn dành cho mọi lứa tuổi và trình độ.
              Với môi trường năng động, trang thiết bị hiện đại và đội ngũ huấn
              luyện viên giàu kinh nghiệm.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              CLB không chỉ giúp nâng cao kỹ thuật mà còn tạo cơ hội kết nối
              cộng đồng đam mê môn thể thao này. Hãy tham gia cùng chúng tôi để
              cùng rèn luyện sức khỏe và chinh phục những thử thách mới!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/intro-1.jpg"
                alt="Người chơi bóng bàn"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
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
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8 text-black">
          Tin tức & sự kiện
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured News */}
          <div className="space-y-4">
            <div className="relative h-[250px] sm:h-[400px] rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="block bg-[#F3F3F3] rounded-lg overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Xếp hạng */}
      <div className="px-4 sm:px-6">
        <Ranking />
      </div>

      {/* Các cây vợt có phong độ tốt nhất */}
      <div className="px-4 sm:px-6">
        <TopPlayers />
      </div>

      {/* Lịch thi đấu tuần kế tiếp */}
      <div className="container mx-auto px-4 sm:px-6 pb-6 sm:pb-10">
        <MatchSchedule />
      </div>
    </div>
  );
}
