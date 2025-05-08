"use client";
import { useState, useEffect } from "react";
import {
  roundApi,
  Round,
  matchScheduleApi,
  type MatchSchedule,
} from "@/services";
import TournamentFilters from "@/app/tournaments/components/TournamentFilters";

export default function MatchSchedule() {
  const [matches, setMatches] = useState<MatchSchedule[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedRound, setSelectedRound] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedMatchRound, setSelectedMatchRound] = useState("");
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
          currentPage,
          20,
          selectedRound,
          selectedGroup,
          selectedMatchRound
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
  }, [
    selectedSeason,
    selectedRound,
    selectedGroup,
    selectedMatchRound,
    currentPage,
  ]);

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
    const pages = [];

    // Add previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev-page"
          onClick={() => handlePageChange(currentPage - 1)}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base rounded"
        >
          ‹
        </button>
      );
    }

    // Add first page
    if (currentPage > 2) {
      pages.push(
        <button
          key="first-page"
          onClick={() => handlePageChange(1)}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base rounded"
        >
          1
        </button>
      );
    }

    // Add ellipsis if needed
    if (currentPage > 3) {
      pages.push(
        <span key="start-ellipsis" className="text-black px-2">
          ...
        </span>
      );
    }

    // Add page numbers
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 2) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage >= totalPages - 1) {
      startPage = totalPages - 2;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={`page-${i}`}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 flex items-center justify-center ${
            currentPage === i
              ? "bg-[#EE344D] text-white"
              : "hover:bg-gray-100 text-black"
          } text-sm sm:text-base rounded`}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="end-ellipsis" className="text-black px-2">
          ...
        </span>
      );
    }

    // Add last page
    if (currentPage < totalPages - 1) {
      pages.push(
        <button
          key="last-page"
          onClick={() => handlePageChange(totalPages)}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base rounded"
        >
          {totalPages}
        </button>
      );
    }

    // Add next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next-page"
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base rounded"
        >
          ›
        </button>
      );
    }

    return (
      <div className="flex justify-center sm:justify-end items-center gap-1 mt-4">
        {pages}
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
          Lịch thi đấu
        </h2>
      </div>

      <TournamentFilters
        seasons={seasons}
        selectedSeason={selectedSeason}
        onSeasonChange={(season) => {
          setSelectedSeason(season);
          setSelectedRound("");
          setSelectedGroup("");
          setSelectedMatchRound("");
          setCurrentPage(1);
        }}
        onRoundChange={(round) => {
          setSelectedRound(round);
          setSelectedGroup("");
          setCurrentPage(1);
        }}
        onGroupChange={(group) => {
          setSelectedGroup(group);
          setCurrentPage(1);
        }}
        onMatchRoundChange={(round) => {
          setSelectedMatchRound(round);
          setCurrentPage(1);
        }}
      />

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
