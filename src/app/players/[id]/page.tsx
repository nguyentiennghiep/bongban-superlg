"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { athleteApi, roundApi, AthleteDetail, Round } from "@/services/api";
import PlayerStats from "@/app/components/PlayerStats";

export default function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [playerData, setPlayerData] = useState<AthleteDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");

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

  // Fetch seasons
  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          // Set the first season as default if available
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_ten);
          }
        }
      } catch (error) {
        console.error("Error fetching seasons:", error);
      }
    };

    fetchSeasons();
  }, []);

  const getCurrentSeasonStats = () => {
    if (!playerData) return null;
    const seasonInfo = playerData.mua_giai_tham_gia?.find(
      (season) => season.mua_giai_ten === selectedSeason
    );
    return seasonInfo;
  };

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
          rank={getCurrentSeasonStats()?.hang_vdv || playerData.hang_vdv}
          rankPoints={
            getCurrentSeasonStats()?.diem_tham_gia?.toString() ||
            playerData.diem_vdv?.toString() ||
            "0"
          }
          accumulatedPoints={
            getCurrentSeasonStats()?.diem_tich_luy?.toString() ||
            playerData.diem_tich_luy?.toString() ||
            "0"
          }
          matches={[]}
          winRate={{
            total: 0,
            wins: 0,
            losses: 0,
            percentage: 0,
          }}
          avatarUrl={
            playerData.avatar_url
              ? `https://admin.hanoispl.com/static${playerData.avatar_url}`
              : undefined
          }
        />

        {/* Season Filter */}
        <div className="mb-4 sm:mb-6">
          <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
            Mùa Giải
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="w-full sm:w-[300px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
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

        {/* Match History Section */}
        <div className="mt-6 sm:mt-8">
          <div className="bg-[#EE344D] rounded-xl h-[40px] sm:h-[56px] flex items-center px-3 sm:px-4 mb-4 sm:mb-6">
            <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
              Lịch sử trận đấu
            </h2>
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
                <tr>
                  <td colSpan={10} className="py-4 text-center text-gray-500">
                    Không có dữ liệu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
