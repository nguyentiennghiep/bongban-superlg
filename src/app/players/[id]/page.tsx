"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { athleteApi, AthleteDetail } from "@/services/api";
import PlayerStats from "@/app/components/PlayerStats";

export default function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [playerData, setPlayerData] = useState<AthleteDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        setIsLoading(true);
        const data = await athleteApi.getAthleteDetail(resolvedParams.id);
        setPlayerData(data);
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayerData();
  }, [resolvedParams.id]);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">Đang tải dữ liệu...</div>
        </div>
      </main>
    );
  }

  if (!playerData) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            Không tìm thấy thông tin vận động viên
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Link href="/" className="text-black">
            Trang chủ
          </Link>
          <span className="text-black">/</span>
          <Link href="/players-teams" className="text-black">
            Đội và vận động viên
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">{playerData.ten_vdv}</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Thông tin vận động viên
        </h1>

        {/* Player Stats with Avatar */}
        <PlayerStats
          name={playerData.ten_vdv}
          birthYear={playerData.nam_sinh}
          rank={playerData.hang_vdv}
          rankPoints={playerData.diem_vdv?.toString() || "0"}
          totalPoints={playerData.diem_vdv?.toString() || "0"}
          matches={[]} // TODO: Add match history API
          winRate={{
            total: 0,
            wins: 0,
            losses: 0,
            percentage: 0,
          }}
          avatarUrl={
            playerData.avatar_url
              ? `https://hanoispl.com/static${playerData.avatar_url}`
              : undefined
          }
        />

        {/* Match History Section */}
        <div className="mt-6 sm:mt-8">
          <div className="bg-[#EE344D] rounded-xl h-[40px] sm:h-[56px] flex items-center px-3 sm:px-4 mb-4 sm:mb-6">
            <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
              Lịch sử trận đấu
            </h2>
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
              Năm
            </label>
            <select className="w-full sm:w-[200px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>2024</option>
            </select>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    STT
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    Ngày thi đấu
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    VĐV Nhà 2
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    VĐV Nhà 1
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    Kết quả
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    VĐV Khách 1
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    VĐV Khách 2
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    Điểm
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-center font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    Trận
                  </th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 text-center font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                    Video
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        {index + 1}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        11/08/2024
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        Uông Ngọc Thành
                        <div className="text-[#666666]">(-64.50)</div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        Lương Đình Quang
                        <div className="text-[#666666]">(-7.10)</div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        1-3
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        Nguyễn Đắc Long
                        <div className="text-[#666666]">(2.40)</div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        Trịnh Hoàng Việt
                        <div className="text-[#666666]">(-86.00)</div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                        -4.80 | 4.80
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <a
                          href="#"
                          className="text-[#0066CC] hover:underline font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]"
                        >
                          Chi tiết
                        </a>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <a
                          href="#"
                          className="text-[#0066CC] hover:underline font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]"
                        >
                          Xem video
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
