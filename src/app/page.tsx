"use client";
import Image from "next/image";
import Link from "next/link";

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
      <section className="container mx-auto px-6 py-12">
        <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
          <h2 className="text-white font-semibold text-[30px] leading-[38px]">
            Xếp Hạng
          </h2>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block font-semibold text-base leading-6 mb-2 text-black">
              Mùa giải
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option value="">Hà Nội SPL 2024</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-base leading-6 mb-2 text-black">
              Hạng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option value="">Series A</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-base leading-6 mb-2 text-black">
              Vòng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option value="">Tất cả</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-base leading-6 mb-2 text-black">
              Bảng
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option value="">Tất cả</option>
            </select>
          </div>
        </div>

        {/* Ranking Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-4 w-16 font-[600] text-[14px] leading-[22px] font-roboto">
                  A
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Đội
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Điểm
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Vòng Thắng
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Vòng Thua
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Trận Thắng
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Trận Thua
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Sec Thắng
                </th>
                <th className="p-4 font-[600] text-[14px] leading-[22px] font-roboto">
                  Sec Thua
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  rank: 1,
                  team: "Bàn Rồng Lửa",
                  points: "24.70",
                  roundWin: 8,
                  roundLoss: 7,
                  matchWin: 74,
                  matchLoss: 55,
                  secWin: 277,
                  secLoss: 231,
                },
                {
                  rank: 2,
                  team: "Cơn Lốc Xoáy",
                  points: "14.10",
                  roundWin: 9,
                  roundLoss: 6,
                  matchWin: 71,
                  matchLoss: 60,
                  secWin: 276,
                  secLoss: 245,
                },
                {
                  rank: 3,
                  team: "Đội Hổ Vằn",
                  points: "9.20",
                  roundWin: 6,
                  roundLoss: 7,
                  matchWin: 64,
                  matchLoss: 53,
                  secWin: 234,
                  secLoss: 227,
                },
                {
                  rank: 4,
                  team: "Sấm Sét Ping Pong",
                  points: "5.10",
                  roundWin: 9,
                  roundLoss: 6,
                  matchWin: 66,
                  matchLoss: 64,
                  secWin: 271,
                  secLoss: 265,
                },
                {
                  rank: 5,
                  team: "Bóng Bàn Sao Băng",
                  points: "3.40",
                  roundWin: 8,
                  roundLoss: 7,
                  matchWin: 64,
                  matchLoss: 65,
                  secWin: 261,
                  secLoss: 252,
                },
                {
                  rank: 6,
                  team: "Đội Chiến Thắng",
                  points: "3.20",
                  roundWin: 7,
                  roundLoss: 8,
                  matchWin: 62,
                  matchLoss: 67,
                  secWin: 255,
                  secLoss: 258,
                },
                {
                  rank: 7,
                  team: "Siêu Sao Bóng Bàn",
                  points: "2.90",
                  roundWin: 6,
                  roundLoss: 9,
                  matchWin: 59,
                  matchLoss: 70,
                  secWin: 248,
                  secLoss: 265,
                },
                {
                  rank: 8,
                  team: "Đội Ánh Sáng",
                  points: "2.50",
                  roundWin: 5,
                  roundLoss: 10,
                  matchWin: 55,
                  matchLoss: 74,
                  secWin: 240,
                  secLoss: 272,
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={`text-black font-roboto font-[400] text-[14px] leading-[22px] ${
                    index % 2 === 1 ? "bg-[#FFE5E5]" : ""
                  }`}
                >
                  <td className="p-4">{item.rank}</td>
                  <td className="p-4">{item.team}</td>
                  <td className="p-4">{item.points}</td>
                  <td className="p-4">{item.roundWin}</td>
                  <td className="p-4">{item.roundLoss}</td>
                  <td className="p-4">{item.matchWin}</td>
                  <td className="p-4">{item.matchLoss}</td>
                  <td className="p-4">{item.secWin}</td>
                  <td className="p-4">{item.secLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          05 cây vợt có phong độ tốt nhất
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md text-center"
            >
              {/* Ảnh vận động viên 3x4 */}
              <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-gray-200">
                <Image
                  src={`https://picsum.photos/200/267?random=${index + 1}`}
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
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Lịch thi đấu tuần kế tiếp
        </h2>
        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-lg font-medium text-secondary">
            Vòng đấu: <span className="font-bold">Vòng 11</span>
          </p>
          <p className="text-lg font-medium text-secondary mt-2">
            Bảng: <span className="font-bold">Bảng A</span>
          </p>
        </div>
      </section>
    </div>
  );
}
