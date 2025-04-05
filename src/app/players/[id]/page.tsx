"use client";

import Link from "next/link";
import PlayerStats from "@/app/components/PlayerStats";

interface Player {
  id: string;
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  totalPoints: string;
  matches: {
    date: string;
    round: string;
    result: string;
  }[];
  winRate: {
    total: number;
    wins: number;
    losses: number;
    percentage: number;
  };
}
//

export default function PlayerDetailPage() {
  // Mock data - trong thực tế sẽ lấy từ API dựa vào params.id
  const playerData: Player = {
    id: "1",
    name: "Hoàng Danh Nhân",
    birthYear: "1963",
    rank: "C1",
    rankPoints: "+80",
    totalPoints: "1800",
    matches: [
      {
        date: "30/06/2025",
        round: "F1",
        result: "",
      },
      {
        date: "24/04/2025",
        round: "F2",
        result: "",
      },
      {
        date: "31/03/2025",
        round: "G1",
        result: "",
      },
    ],
    winRate: {
      total: 10,
      wins: 9,
      losses: 1,
      percentage: 98,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/" className="text-black">
            Trang chủ
          </Link>
          <span className="text-black">/</span>
          <Link href="/players-teams" className="text-black">
            Đội và vận động viên
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">{playerData.name}</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-[38px] leading-[46px] mb-6 text-black">
          Thông tin vận động viên
        </h1>

        {/* Player Stats with Avatar */}
        <PlayerStats
          name={playerData.name}
          birthYear={playerData.birthYear}
          rank={playerData.rank}
          rankPoints={playerData.rankPoints}
          totalPoints={playerData.totalPoints}
          matches={playerData.matches}
          winRate={playerData.winRate}
        />

        {/* Match History Section */}
        <div className="mt-8">
          <div className="bg-[#EE344D] rounded-xl h-[56px] flex items-center px-4 mb-6">
            <h2 className="text-white font-semibold text-[30px] leading-[38px]">
              Lịch sử trận đấu
            </h2>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
              Năm
            </label>
            <select className="w-[200px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>2024</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    STT
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    Ngày thi đấu
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    VĐV Nhà 2
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    VĐV Nhà 1
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    Kết quả
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    VĐV Khách 1
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    VĐV Khách 2
                  </th>
                  <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                    Điểm
                  </th>
                  <th className="py-3 px-4 text-center font-roboto font-[600] text-[14px] leading-[22px]">
                    Trận
                  </th>
                  <th className="py-3 px-4 text-center font-roboto font-[600] text-[14px] leading-[22px]">
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
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        11/08/2024
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        Uông Ngọc Thành
                        <div className="text-[#666666]">(-64.50)</div>
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        Lương Đình Quang
                        <div className="text-[#666666]">(-7.10)</div>
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        1-3
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        Nguyễn Đắc Long
                        <div className="text-[#666666]">(2.40)</div>
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        Trịnh Hoàng Việt
                        <div className="text-[#666666]">(-86.00)</div>
                      </td>
                      <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                        -4.80 | 4.80
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href="#"
                          className="text-[#0066CC] hover:underline font-roboto text-[14px] leading-[22px]"
                        >
                          Chi tiết
                        </a>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href="#"
                          className="text-[#0066CC] hover:underline font-roboto text-[14px] leading-[22px]"
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
