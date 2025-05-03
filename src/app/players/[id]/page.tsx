"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  athleteApi,
  roundApi,
  AthleteDetail,
  Round,
  AthleteMatchHistoryResponse,
} from "@/services";
import PlayerStats from "@/app/components/PlayerStats";
import MatchDetailModal from "@/app/components/MatchDetailModal";
import { MatchDetail } from "@/app/components/MatchDetailModal";

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
  const [matchHistory, setMatchHistory] =
    useState<AthleteMatchHistoryResponse | null>(null);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<MatchDetail | null>(null);

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
            setSelectedSeason(response.objects[0].mua_giai_id);
          }
        }
      } catch (error) {
        console.error("Error fetching seasons:", error);
      }
    };

    fetchSeasons();
  }, []);

  // Fetch match history when season changes
  useEffect(() => {
    const fetchMatchHistory = async () => {
      if (!selectedSeason) return;

      setIsLoadingHistory(true);
      try {
        const data = await athleteApi.getAthleteMatchHistory(
          selectedSeason,
          resolvedParams.id
        );
        setMatchHistory(data);
      } catch (error) {
        console.error("Error fetching match history:", error);
        setMatchHistory(null);
      } finally {
        setIsLoadingHistory(false);
      }
    };

    fetchMatchHistory();
  }, [selectedSeason, resolvedParams.id]);

  const getCurrentSeasonStats = () => {
    if (!playerData) return null;
    const seasonInfo = playerData.mua_giai_tham_gia?.find(
      (season) => season.mua_giai_id === selectedSeason
    );
    return seasonInfo;
  };

  const formatDate = (dateNumber: number) => {
    const dateStr = dateNumber.toString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${day}/${month}/${year}`;
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
            total: matchHistory?.tong_quan.tong_so_tran || 0,
            wins: matchHistory?.tong_quan.so_tran_thang || 0,
            losses: matchHistory?.tong_quan.so_tran_thua || 0,
            percentage: matchHistory?.tong_quan.tong_so_tran
              ? (matchHistory.tong_quan.so_tran_thang /
                  matchHistory.tong_quan.tong_so_tran) *
                100
              : 0,
          }}
          avatarUrl={
            playerData.avatar_url
              ? `https://admin.hanoispl.com/static${playerData.avatar_url}`
              : undefined
          }
          notes={getCurrentSeasonStats()?.ghi_chu || ""}
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
                <option key={season.id} value={season.mua_giai_id}>
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
          {isLoadingHistory ? (
            <div className="text-center">Đang tải dữ liệu...</div>
          ) : !matchHistory ? (
            <div className="text-center text-gray-500">
              Không lấy được dữ liệu
            </div>
          ) : matchHistory.lich_su.length === 0 ? (
            <div className="text-center text-gray-500">Không có dữ liệu</div>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th
                      className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]"
                      style={{
                        width: "20px",
                        minWidth: "20px",
                        maxWidth: "20px",
                      }}
                    >
                      #
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Ngày thi đấu
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Đội nhà
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Đội khách
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Kết quả
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Tỉ số set
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-roboto font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px]">
                      Chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matchHistory?.lich_su.map((match, index) => (
                    <tr
                      key={match.tran_dau_id}
                      className={`text-black font-roboto font-[400] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] h-[42px] ${
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <td
                        className="px-2 sm:px-4"
                        style={{
                          width: "20px",
                          minWidth: "20px",
                          maxWidth: "20px",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td className="px-2 sm:px-4">
                        {formatDate(match.ngay_thi_dau)} {match.gio_thi_dau}
                      </td>
                      <td className="px-2 sm:px-4">{match.doi_a_ten}</td>
                      <td className="px-2 sm:px-4">{match.doi_b_ten}</td>
                      <td className="px-2 sm:px-4">
                        {match.ket_qua_tran_dau || "Chưa có kết quả"}
                      </td>
                      <td className="px-2 sm:px-4">
                        {match.tiso_setdau || "Chưa có kết quả"}
                      </td>
                      <td className="px-2 sm:px-4">
                        {match.ket_qua_tran_dau ? (
                          <button
                            onClick={() =>
                              setSelectedMatch({
                                details: match.trandauthamgia,
                                doi_a_ten: match.doi_a_ten,
                                doi_b_ten: match.doi_b_ten,
                              })
                            }
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                          >
                            Xem
                          </button>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Match Detail Modal */}
      {selectedMatch && (
        <MatchDetailModal
          isOpen={!!selectedMatch}
          onClose={() => setSelectedMatch(null)}
          matchDetails={selectedMatch.details}
          doi_a_ten={selectedMatch.doi_a_ten}
          doi_b_ten={selectedMatch.doi_b_ten}
        />
      )}
    </main>
  );
}
