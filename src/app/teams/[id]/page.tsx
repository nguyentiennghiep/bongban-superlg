"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { teamApi, Team, TeamMember } from "@/services/api";
import PlayerCard from "@/app/components/PlayerCard";
import MatchSchedule from "@/app/components/MatchSchedule";

export default function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedSeason, setSelectedSeason] = useState("Hà Nội SPL 2024");
  const [team, setTeam] = useState<Team | null>(null);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setIsLoading(true);
        // Fetch team details
        const teamData = await teamApi.getTeams(
          1,
          1,
          undefined,
          resolvedParams.id
        );
        if ("objects" in teamData && teamData.objects.length > 0) {
          setTeam(teamData.objects[0]);
        }

        // Fetch team members
        const membersData = await teamApi.getTeamMembers(
          resolvedParams.id,
          currentPage,
          20,
          searchText
        );
        if ("objects" in membersData) {
          setMembers(membersData.objects);
          setTotalPages(membersData.total_pages);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, [resolvedParams.id, currentPage, searchText]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1);
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

  if (!team) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">Không tìm thấy thông tin đội</div>
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
          <span className="text-black">{team.ten_doi}</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Thông tin đội
        </h1>

        {/* Team Info */}
        <div className="bg-[#F3F3F3] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="font-[600] text-black">Tên đội</div>
            <div className="text-black">{team.ten_doi}</div>
            <div className="font-[600] text-black">CLB Chủ Quản</div>
            <div className="text-black">
              {team.doi_truong_ten} - {team.doi_truong_sdt}
            </div>
            <div className="font-[600] text-black">Liên Hệ</div>
            <div className="text-black">{team.dia_chi}</div>
          </div>
        </div>

        {/* Members Section */}
        <div>
          <div className="bg-[#EE344D] rounded-xl h-[40px] sm:h-[56px] flex items-center px-3 sm:px-4 mb-4 sm:mb-6">
            <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
              Thành Viên
            </h2>
          </div>

          {/* Season Filter */}
          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
              Mùa Giải
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full sm:w-[200px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
            >
              <option value="Hà Nội SPL 2024">Hà Nội SPL 2024</option>
            </select>
          </div>

          {/* Search */}
          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
              Tìm kiếm thành viên
            </label>
            <input
              type="text"
              placeholder="Nhập tên thành viên để tìm kiếm"
              className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {members.map((member) => (
              <PlayerCard
                key={member.id}
                player={{
                  id: parseInt(member.vdv_id.replace(/-/g, ""), 16),
                  name: member.thanhvien_ten,
                  birthYear: "", // Not available in API
                  rank: member.vdv_hang,
                  rankPoints: member.vdv_diem.toString(),
                  totalPoints: member.vdv_diem.toString(),
                  avatarUrl: member.thanhvien_avatar_url
                    ? `https://hanoispl.com/static${member.thanhvien_avatar_url}`
                    : undefined,
                }}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center sm:justify-end items-center gap-2 mb-6">
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

          {/* Match Schedule */}
          <MatchSchedule />
        </div>
      </div>
    </main>
  );
}
