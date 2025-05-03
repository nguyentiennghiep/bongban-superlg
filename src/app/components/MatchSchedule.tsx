"use client";
import { useState, useEffect } from "react";
import {
  roundApi,
  Round,
  matchScheduleApi,
  type MatchSchedule,
} from "@/services";

export default function MatchSchedule() {
  const [matches, setMatches] = useState<MatchSchedule[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
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
      }
    };

    fetchSeasons();
  }, []);

  useEffect(() => {
    const fetchMatches = async () => {
      if (!selectedSeason) return;

      setIsLoading(true);
      try {
        const response = await matchScheduleApi.getMatchSchedules(
          selectedSeason,
          currentPage
        );
        if ("objects" in response) {
          setMatches(response.objects);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [selectedSeason, currentPage]);

  const formatDate = (dateNumber: number) => {
    const dateStr = dateNumber.toString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${day}/${month}/${year}`;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
    <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
          Lịch thi đấu tuần kế tiếp
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Mùa Giải
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => {
              setSelectedSeason(e.target.value);
              setCurrentPage(1);
            }}
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

      {isLoading ? (
        <div className="text-center py-12">Đang tải dữ liệu...</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white text-left h-[42px]">
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Ngày
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Vòng
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Đội nhà
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Đội khách
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Tỷ số
                  </th>
                  <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                    Đường đi
                  </th>
                </tr>
              </thead>
              <tbody>
                {matches.length > 0 ? (
                  matches.map((match, index) => (
                    <tr
                      key={match.id}
                      className={`text-black font-roboto font-[400] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] h-[42px] ${
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <td className="px-2 sm:px-4">
                        {formatDate(match.ngay_thi_dau)} {match.gio_thi_dau}
                      </td>
                      <td className="px-2 sm:px-4">{match.vong_dau_ten}</td>
                      <td className="px-2 sm:px-4">{match.doi_a_ten}</td>
                      <td className="px-2 sm:px-4">{match.doi_b_ten}</td>
                      <td className="px-2 sm:px-4">{match.ket_qua || "-"}</td>
                      <td className="px-2 sm:px-4">
                        <a
                          href={
                            match.map_san_dau.includes("iframe")
                              ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  match.diachi_thi_dau
                                )}`
                              : match.map_san_dau
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          Xem đường đi
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-12 text-center">
                      Không có trận đấu nào
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
