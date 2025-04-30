import { useState, useEffect } from "react";
import { matchScheduleApi, MatchSchedule } from "@/services/api";

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

  useEffect(() => {
    const fetchTeamMatches = async () => {
      try {
        setIsLoading(true);
        const response = await matchScheduleApi.getMatchSchedules(
          selectedSeason
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

  if (isLoading) {
    return (
      <div className="bg-[#F3F3F3] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
        <div className="text-center">Đang tải dữ liệu...</div>
      </div>
    );
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

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white text-left h-[42px]">
              <th className="px-3 sm:px-4">Ngày</th>
              <th className="px-3 sm:px-4">Giờ</th>
              <th className="px-3 sm:px-4">Đội A</th>
              <th className="px-3 sm:px-4">Đội B</th>
              <th className="px-3 sm:px-4">Kết quả</th>
              <th className="px-3 sm:px-4">Sân</th>
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
                <td className="px-3 sm:px-4">{match.ngay_thi_dau}</td>
                <td className="px-3 sm:px-4">{match.gio_thi_dau}</td>
                <td className="px-3 sm:px-4">{match.doi_a_ten}</td>
                <td className="px-3 sm:px-4">{match.doi_b_ten}</td>
                <td className="px-3 sm:px-4">
                  {match.ket_qua || "Chưa có kết quả"}
                </td>
                <td className="px-3 sm:px-4">{match.san_thi_dau}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
