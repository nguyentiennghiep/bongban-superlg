"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-64">
        <Image
          src="https://picsum.photos/1200/300?random=99"
          alt="Banner Bóng Bàn"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Nội dung trang */}
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
    </div>
  );
}
