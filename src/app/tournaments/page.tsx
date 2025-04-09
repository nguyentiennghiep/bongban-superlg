"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { roundApi, Round } from "@/services/api";

interface Match {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  round: string;
}

export default function TournamentsPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_ten);
          }
        }
      } catch (error) {
        console.error("Error fetching seasons:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeasons();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Link href="/" className="text-black">
            Trang chủ
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">Giải đấu</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-6 sm:mb-8 text-black">
          Giải đấu
        </h1>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
              Mùa Giải
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full min-w-[300px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
            >
              {seasons.length > 0 ? (
                seasons.map((season) => (
                  <option key={season.id} value={season.mua_giai_ten}>
                    {season.mua_giai_ten}
                  </option>
                ))
              ) : (
                <option value="">Đang tải...</option>
              )}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
              Hạng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Series A</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
              Đội
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Vui lòng chọn</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
              Vòng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Vòng Bảng 2</option>
            </select>
          </div>
        </div>

        {/* Matches Table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                  Thứ tự
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                  Ngày thi đấu
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                  Đội nhà
                </th>
                <th className="py-2 sm:py-3 px-2 w-[40px] sm:w-[60px]"></th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                  Đội khách
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                  Vòng đấu
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-4 text-center">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : matches.length > 0 ? (
                matches.map((match, index) => (
                  <tr
                    key={match.id}
                    className={
                      index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                    }
                  >
                    <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                      {match.id}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                      {match.date}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                      {match.homeTeam}
                    </td>
                    <td className="py-2 sm:py-3 px-2 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black text-center">
                      VS
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                      {match.awayTeam}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                      {match.round}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center">
                    Không có trận đấu nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
