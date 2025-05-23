import { useState, useEffect } from "react";
import {
  matchScheduleApi,
  MatchSchedule,
  matchDetailApi,
  TeamMatchDetail,
} from "@/services";
import TeamMatchDetailModal from "@/app/components/TeamMatchDetailModal";

interface TeamMatchHistoryProps {
  teamId: string;
  selectedSeason: string;
}

export default function TeamMatchHistory({
  teamId,
  selectedSeason,
}: TeamMatchHistoryProps) {
  const [matches, setMatches] = useState<MatchSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<TeamMatchDetail | null>(
    null
  );
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  useEffect(() => {
    const fetchTeamMatches = async () => {
      try {
        setIsLoading(true);
        const response = await matchScheduleApi.getMatchSchedules(
          selectedSeason,
          1,
          1000
        );
        if (response.objects) {
          // Lọc các trận đấu của đội này (cả khi là đội A hoặc đội B)
          console.log(response.objects);
          const teamMatches = response.objects.filter(
            (match) => match.doi_a_id === teamId || match.doi_b_id === teamId
          );
          setMatches(teamMatches);
        }
      } catch (error) {
        console.error("Error fetching team matches:", error);
        setMatches([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMatches();
  }, [teamId, selectedSeason]);

  const formatDate = (dateNumber: number) => {
    const dateStr = dateNumber.toString();
    const year = dateStr.substring(0, 4);
    const month = parseInt(dateStr.substring(4, 6));
    const day = parseInt(dateStr.substring(6, 8));
    return `${day}/${month}/${year}`;
  };

  const handleViewDetails = async (matchId: string) => {
    try {
      setIsLoadingDetails(true);
      const data = await matchDetailApi.getMatchDetail(matchId);
      setSelectedMatch(data);
    } catch (error) {
      console.error("Error fetching match details:", error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Đang tải dữ liệu...</div>;
  }

  if (matches.length === 0) {
    return (
      <div className="bg-[#F3F3F3] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
        <div className="text-center">Không có dữ liệu trận đấu</div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F3F3] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
      <div className="bg-[#EE344D] rounded-xl h-[40px] sm:h-[56px] flex items-center px-3 sm:px-4 mb-4 sm:mb-6">
        <h2 className="text-white font-semibold text-xl sm:text-[30px] leading-[28px] sm:leading-[38px]">
          Lịch Sử Trận Đấu
        </h2>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white text-left h-[42px]">
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Ngày
              </th>
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Giờ
              </th>
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Đội Nhà
              </th>
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Đội Khách
              </th>
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Kết quả
              </th>
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr
                key={match.id}
                className={`text-black font-roboto font-[400] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] h-[42px] ${
                  index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                }`}
              >
                <td className="px-2 sm:px-4">
                  {formatDate(match.ngay_thi_dau)}
                </td>
                <td className="px-2 sm:px-4">{match.gio_thi_dau}</td>
                <td className="px-2 sm:px-4">{match.doi_a_ten}</td>
                <td className="px-2 sm:px-4">{match.doi_b_ten}</td>
                <td className="px-2 sm:px-4">
                  {match.ket_qua || "Chưa có kết quả"}
                </td>
                <td className="px-2 sm:px-4">
                  {match.ket_qua ? (
                    <button
                      onClick={() => handleViewDetails(match.id)}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-[12px] sm:text-[14px]"
                      disabled={isLoadingDetails}
                    >
                      {isLoadingDetails ? "Đang tải..." : "Xem"}
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

      {/* Team Match Detail Modal */}
      <TeamMatchDetailModal
        isOpen={!!selectedMatch}
        onClose={() => setSelectedMatch(null)}
        matchDetails={selectedMatch}
      />
    </div>
  );
}
