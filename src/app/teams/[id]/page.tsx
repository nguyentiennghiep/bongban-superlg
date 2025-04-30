"use client";

import { useState, useEffect, use, useCallback } from "react";
import debounce from "lodash/debounce";
import {
  teamApi,
  athleteApi,
  roundApi,
  Team,
  TeamMember,
  AthleteDetail,
  Round,
} from "@/services/api";
import TeamBreadcrumb from "./components/TeamBreadcrumb";
import TeamInfo from "./components/TeamInfo";
import TeamMembers from "./components/TeamMembers";
import TeamMembersSearch from "./components/TeamMembersSearch";
import TeamMembersPagination from "./components/TeamMembersPagination";
import TeamMatchHistory from "./components/TeamMatchHistory";

export default function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [team, setTeam] = useState<Team | null>(null);
  const [allMembers, setAllMembers] = useState<TeamMember[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [athleteDetails, setAthleteDetails] = useState<
    Record<string, AthleteDetail>
  >({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchText(value);
      setCurrentPage(1);
    }, 500),
    []
  );

  // Hàm xử lý khi người dùng nhập text
  const handleSearch = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };

  // Hàm sắp xếp theo hạng
  const sortByRank = (a: TeamMember, b: TeamMember) => {
    // Tách hạng thành chữ cái và số
    const getRankParts = (rank: string | null) => {
      if (!rank) return { letter: "Z", number: 999 }; // Đặt các hạng null ở cuối
      const match = rank.match(/([A-Z])(\d+)/);
      if (!match) return { letter: "Z", number: 999 }; // Đặt các hạng không đúng format ở cuối
      return { letter: match[1], number: parseInt(match[2]) };
    };

    const rankA = getRankParts(a.vdv_hang);
    const rankB = getRankParts(b.vdv_hang);

    // So sánh chữ cái trước
    if (rankA.letter !== rankB.letter) {
      return rankA.letter.localeCompare(rankB.letter);
    }

    // Nếu chữ cái giống nhau, so sánh số
    return rankA.number - rankB.number;
  };

  // Hàm lấy thông tin chi tiết vận động viên
  const fetchAthleteDetails = async (athleteId: string) => {
    try {
      const response = await athleteApi.getAthleteDetail(athleteId);
      setAthleteDetails((prev) => ({
        ...prev,
        [athleteId]: response,
      }));
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  };

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

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setIsLoading(true);
        // Fetch team details
        const teamData = await teamApi.getTeams();
        if ("objects" in teamData && teamData.objects.length > 0) {
          const foundTeam = teamData.objects.find(
            (team: Team) => team.id === resolvedParams.id
          );
          if (foundTeam) {
            setTeam(foundTeam);
          }
        }

        // Fetch all team members
        const membersData = await teamApi.getTeamMembers(
          resolvedParams.id,
          1,
          1000, // Lấy tất cả thành viên
          ""
        );
        if ("objects" in membersData) {
          // Sắp xếp members theo hạng trước khi set state
          const sortedMembers = [...membersData.objects].sort(sortByRank);
          setAllMembers(sortedMembers);
          setFilteredMembers(sortedMembers);

          // Fetch details for each athlete
          sortedMembers.forEach((member) => {
            if (member.vdv_id) {
              fetchAthleteDetails(member.vdv_id);
            }
          });
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, [resolvedParams.id]);

  // Effect để lọc members khi search text thay đổi
  useEffect(() => {
    if (!searchText) {
      setFilteredMembers(allMembers);
      return;
    }

    const filtered = allMembers.filter((member) =>
      member.thanhvien_ten.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchText, allMembers]);

  // Tính toán số trang dựa trên số lượng members đã lọc
  useEffect(() => {
    const itemsPerPage = 20;
    const total = Math.ceil(filteredMembers.length / itemsPerPage);
    setTotalPages(total);
  }, [filteredMembers]);

  // Tính toán members cho trang hiện tại
  const currentMembers = filteredMembers.slice(
    (currentPage - 1) * 20,
    currentPage * 20
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
        <TeamBreadcrumb teamName={team.ten_doi} />

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Thông tin đội
        </h1>

        <TeamInfo team={team} />

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

          <TeamMembersSearch
            searchInput={searchInput}
            onSearch={handleSearch}
          />

          <TeamMembers
            members={currentMembers}
            athleteDetails={athleteDetails}
            selectedSeason={selectedSeason}
          />

          <TeamMembersPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Team Match History */}
          <TeamMatchHistory
            teamId={resolvedParams.id}
            selectedSeason={selectedSeason}
          />
        </div>
      </div>
    </main>
  );
}
