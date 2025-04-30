"use client";
import { useState, useEffect } from "react";
import { roundApi, Round, rankingApi, AthleteRanking } from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopPlayers() {
  const router = useRouter();
  // const [activeTab, setActiveTab] = useState("series-a");
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [players, setPlayers] = useState<AthleteRanking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
    const fetchPlayers = async () => {
      if (!selectedSeason) return;

      setIsLoading(true);
      try {
        const response = await rankingApi.getAthleteRankings(
          selectedSeason,
          currentPage
        );
        if ("objects" in response) {
          setPlayers(response.objects);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, [selectedSeason, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowClick = (playerId: string) => {
    router.push(`/players/${playerId}`);
  };

  const renderPagination = () => {
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

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Title with red background */}
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Các cây vợt có phong độ tốt nhất
        </h2>
      </div>

      {/* Temporarily hidden tabs - will be used later */}
      {/* <div className="border-b border-[#DFDFDF] mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("series-a")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "series-a"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Series A
          </button>
          <button
            onClick={() => setActiveTab("super-cup")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "super-cup"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Siêu cúp
          </button>
        </div>
      </div> */}

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
            <option value="">Vui lòng chọn</option>
          </select>
        </div> */}
      </div>

      {/* Tabs */}
      {/* <div className="border-b border-[#DFDFDF] mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("series-a")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "series-a"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Series A
          </button>
          <button
            onClick={() => setActiveTab("super-cup")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "super-cup"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Siêu cúp
          </button>
        </div>
      </div> */}

      {/* Players Table */}
      {isLoading ? (
        <div className="text-center">Đang tải dữ liệu...</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white text-left h-[42px]">
                  <th className="px-2 sm:px-4 w-12 sm:w-16 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    STT
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Tên
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Đội
                  </th>
                  <th className="px-2 sm:px-4 w-16 sm:w-24 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Hạng
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Điểm tích lũy
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Trận
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Thắng
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Thua
                  </th>
                </tr>
              </thead>
              <tbody>
                {players.length > 0 ? (
                  players.map((player, index) => (
                    <tr
                      key={player.id}
                      onClick={() => handleRowClick(player.vdv_id)}
                      className={`text-black font-roboto font-[400] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] h-[42px] cursor-pointer hover:bg-gray-200 ${
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <td className="px-2 sm:px-4">
                        {(currentPage - 1) * 20 + index + 1}
                      </td>
                      <td className="px-2 sm:px-4">
                        <div className="flex items-center gap-2">
                          {player.vdv_avatar_url && (
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={`https://admin.hanoispl.com/static${player.vdv_avatar_url}`}
                                alt={player.vdv_ten}
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
                          {player.vdv_ten}
                        </div>
                      </td>
                      <td className="px-2 sm:px-4">{player.doi_bong_ten}</td>
                      <td className="px-2 sm:px-4">{player.vdv_hang}</td>
                      <td className="px-2 sm:px-4">{player.diem_tich_luy}</td>
                      <td className="px-2 sm:px-4">{player.tong_so_tran}</td>
                      <td className="px-2 sm:px-4">{player.so_tran_thang}</td>
                      <td className="px-2 sm:px-4">{player.so_tran_thua}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="p-3 text-center">
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && renderPagination()}
        </>
      )}
    </section>
  );
}
