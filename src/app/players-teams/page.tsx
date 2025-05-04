"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { teamApi, athleteApi, Team, Athlete } from "@/services";
import Image from "next/image";

export default function PlayersTeamsPage() {
  const [activeTab, setActiveTab] = useState<"team" | "player">("team");
  const [teams, setTeams] = useState<Team[]>([]);
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [athleteSearchText, setAthleteSearchText] = useState("");
  const [selectedRank, setSelectedRank] = useState("");

  const fetchTeams = async (page: number, search?: string) => {
    try {
      setIsLoading(true);
      const data = await teamApi.getTeams(page, 50, search);
      if ("objects" in data) {
        setTeams(data.objects);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAthletes = async (page: number, search?: string) => {
    try {
      setIsLoading(true);
      const data = await athleteApi.getAthletes(page, 20, search, selectedRank);
      if ("objects" in data) {
        setAthletes(data.objects);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.error("Error fetching athletes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (activeTab === "team") {
      fetchTeams(currentPage, searchText);
    } else {
      fetchAthletes(currentPage, athleteSearchText);
    }
  }, [activeTab, currentPage, searchText, athleteSearchText, selectedRank]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab: "team" | "player") => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
    setSearchText(""); // Reset search text when changing tabs
    setAthleteSearchText(""); // Reset athlete search text when changing tabs
    setSelectedRank(""); // Reset rank filter when changing tabs
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleAthleteSearch = (value: string) => {
    setAthleteSearchText(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleRankChange = (value: string) => {
    setSelectedRank(value);
    setCurrentPage(1); // Reset to first page when changing rank
  };

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Đội bóng và vận động viên
        </h1>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 sm:mb-6">
          <button
            className={`px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base ${
              activeTab === "team"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => handleTabChange("team")}
          >
            Đội
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base ${
              activeTab === "player"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => handleTabChange("player")}
          >
            Vận động viên
          </button>
        </div>

        {/* Search and Filters */}
        {activeTab === "team" ? (
          // Team search
          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
              Tên đội
            </label>
            <input
              type="text"
              placeholder="Nhập tên đội để tìm kiếm"
              className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        ) : (
          // Player filters
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-[120px]">
              <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Hạng
              </label>
              <select
                className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
                value={selectedRank}
                onChange={(e) => handleRankChange(e.target.value)}
              >
                <option value="">Tất cả</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
                <option value="D1">D1</option>
                <option value="D2">D2</option>
                <option value="E1">E1</option>
                <option value="E2">E2</option>
                <option value="F1">F1</option>
                <option value="F2">F2</option>
                <option value="G1">G1</option>
                <option value="G2">G2</option>
                <option value="H1">H1</option>
                <option value="H2">H2</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Họ và Tên
              </label>
              <input
                type="text"
                placeholder="Nhập tên vận động viên để tìm kiếm"
                className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
                value={athleteSearchText}
                onChange={(e) => handleAthleteSearch(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-black text-white text-left h-[42px]">
                <th
                  className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto"
                  style={{ width: "20px", minWidth: "20px", maxWidth: "20px" }}
                >
                  #
                </th>
                {activeTab === "team" ? (
                  <>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Tên đội
                    </th>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Đội Trưởng
                    </th>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Sân nhà
                    </th>
                  </>
                ) : (
                  <>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Tên
                    </th>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Đội
                    </th>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Tuổi
                    </th>
                    <th className="px-2 sm:px-4 w-16 sm:w-24 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Hạng
                    </th>
                    <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                      Điểm
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={activeTab === "team" ? 4 : 5}
                    className="px-4 py-2 text-center"
                  >
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : activeTab === "team" ? (
                teams.map((team, index) => (
                  <tr
                    key={team.id}
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
                      {team.stt}
                    </td>
                    <td className="px-2 sm:px-4">
                      <div className="flex items-center gap-2">
                        {team.logo_url && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={`https://admin.hanoispl.com/static${team.logo_url}`}
                              alt={team.ten_doi}
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
                        <Link
                          href={`/teams/${team.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {team.ten_doi}
                        </Link>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4">
                      {team.doi_truong_ten} -{" "}
                      <a
                        href={`tel:${team.doi_truong_sdt}`}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {team.doi_truong_sdt}
                      </a>
                    </td>
                    <td className="px-2 sm:px-4">{team.dia_chi}</td>
                  </tr>
                ))
              ) : (
                athletes.map((athlete, index) => (
                  <tr
                    key={athlete.id}
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
                      {athlete.stt}
                    </td>
                    <td className="px-2 sm:px-4">
                      <Link
                        href={`/players/${athlete.vdv_id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {athlete.vdv_ten}
                      </Link>
                    </td>
                    <td className="px-2 sm:px-4">{athlete.doi_bong_ten}</td>
                    <td className="px-2 sm:px-4">
                      {new Date().getFullYear() - parseInt(athlete.nam_sinh)}
                    </td>
                    <td className="px-2 sm:px-4">{athlete.vdv_hang || "-"}</td>
                    <td className="px-2 sm:px-4">{athlete.vdv_diem || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center sm:justify-end items-center gap-2 mt-4">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base"
            >
              ‹
            </button>
          )}

          {currentPage > 2 && (
            <button
              onClick={() => handlePageChange(1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base"
            >
              1
            </button>
          )}

          {currentPage > 3 && <span className="text-black">...</span>}

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page =
              Math.max(1, Math.min(currentPage - 2, totalPages - 4)) + i;
            return page <= totalPages ? (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 flex items-center justify-center ${
                  currentPage === page
                    ? "bg-[#EE344D] text-white"
                    : "hover:bg-gray-100 text-black"
                } text-sm sm:text-base`}
              >
                {page}
              </button>
            ) : null;
          })}

          {currentPage < totalPages - 2 && (
            <span className="text-black">...</span>
          )}

          {currentPage < totalPages - 1 && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base"
            >
              {totalPages}
            </button>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black text-sm sm:text-base"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
