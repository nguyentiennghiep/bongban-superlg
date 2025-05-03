"use client";
import { useState, useEffect } from "react";
import { roundApi, Round, rankingApi, TeamRanking } from "@/services";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ranking() {
  const router = useRouter();
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [rankings, setRankings] = useState<TeamRanking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 10;

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_id);
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

  useEffect(() => {
    const fetchRankings = async () => {
      if (!selectedSeason) return;

      setIsLoading(true);
      try {
        const response = await rankingApi.getTeamRankings(
          selectedSeason,
          1,
          1000
        );
        if ("objects" in response) {
          // Filter out teams with zero wins and losses
          const filteredTeams = response.objects.filter(
            (team) => team.so_tran_thang !== 0 || team.so_tran_thua !== 0
          );

          // Sort teams by criteria
          const sortedTeams = filteredTeams.sort((a, b) => {
            // TC1: Sort by points
            if (a.diem_mua_giai !== b.diem_mua_giai) {
              return b.diem_mua_giai - a.diem_mua_giai;
            }
            // TC2: Sort by win-loss difference
            const aWinLossDiff = a.so_tran_thang - a.so_tran_thua;
            const bWinLossDiff = b.so_tran_thang - b.so_tran_thua;
            if (aWinLossDiff !== bWinLossDiff) {
              return bWinLossDiff - aWinLossDiff;
            }
            // TC3: Sort by set difference
            const aSetDiff = a.tong_so_set_thang - a.tong_so_set_thua;
            const bSetDiff = b.tong_so_set_thang - b.tong_so_set_thua;
            return bSetDiff - aSetDiff;
          });
          setRankings(sortedTeams);
        }
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRankings();
  }, [selectedSeason]);

  const getSelectedSeasonName = () => {
    const season = seasons.find((s) => s.mua_giai_id === selectedSeason);
    return season ? season.mua_giai_ten : "";
  };

  const handleRowClick = (teamId: string) => {
    router.push(`/teams/${teamId}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(rankings.length / teamsPerPage);
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center sm:justify-end items-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ${
              currentPage === page
                ? "bg-[#EE344D] text-white"
                : "hover:bg-gray-100 text-black"
            } text-sm sm:text-base`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  const getCurrentPageTeams = () => {
    const startIndex = (currentPage - 1) * teamsPerPage;
    const endIndex = startIndex + teamsPerPage;
    return rankings.slice(startIndex, endIndex);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
          Xếp hạng
        </h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Mùa giải
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
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
        {/* Temporarily hidden round filter - will be used later */}
        {/* <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Vòng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div> */}
        {/* Temporarily hidden group filter - will be used later */}
        {/* <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Bảng
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div> */}
      </div>

      {/* Season Name */}
      {selectedSeason && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black">
            {getSelectedSeasonName()}
          </h3>
        </div>
      )}

      {/* Ranking Table */}
      {isLoading ? (
        <div className="text-center">Đang tải dữ liệu...</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white text-left h-[42px]">
                  <th
                    className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto"
                    style={{
                      width: "20px",
                      minWidth: "20px",
                      maxWidth: "20px",
                    }}
                  >
                    #
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Đội
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Thắng
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Thua
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Điểm
                  </th>
                </tr>
              </thead>
              <tbody>
                {rankings.length > 0 ? (
                  getCurrentPageTeams().map((team, index) => (
                    <tr
                      key={team.id}
                      onClick={() => handleRowClick(team.doi_bong_id)}
                      className={`text-black font-roboto font-[400] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] h-[42px] cursor-pointer hover:bg-gray-200 ${
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
                        {(currentPage - 1) * teamsPerPage + index + 1}
                      </td>
                      <td className="px-2 sm:px-4">
                        <div className="flex items-center gap-2">
                          {team.doi_bong_logo_url && (
                            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={`https://admin.hanoispl.com/static${team.doi_bong_logo_url}`}
                                alt={team.doi_bong_ten}
                                fill
                                sizes="32px"
                                className="object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                }}
                              />
                            </div>
                          )}
                          {team.doi_bong_ten}
                        </div>
                      </td>
                      <td className="px-2 sm:px-4">{team.so_tran_thang}</td>
                      <td className="px-2 sm:px-4">{team.so_tran_thua}</td>
                      <td className="px-2 sm:px-4 font-semibold">
                        {team.diem_mua_giai}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-3 text-center">
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {renderPagination()}
        </>
      )}
    </section>
  );
}
