import { MatchSchedule, matchDetailApi, TeamMatchDetail } from "@/services";
import { useState } from "react";
import TeamMatchDetailModal from "@/app/components/TeamMatchDetailModal";

interface MatchesTableProps {
  matches: MatchSchedule[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function MatchesTable({
  matches,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: MatchesTableProps) {
  const [selectedMatch, setSelectedMatch] = useState<TeamMatchDetail | null>(
    null
  );
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const formatDate = (dateNumber: number) => {
    const dateStr = dateNumber.toString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
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

  return (
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
              <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
                Chi tiết
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
                  <td className="px-2 sm:px-4">
                    {match.ket_qua ? (
                      <button
                        onClick={() => handleViewDetails(match.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                        disabled={isLoadingDetails}
                      >
                        {isLoadingDetails ? "Đang tải..." : "Xem"}
                      </button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-12 text-center">
                  Không có trận đấu nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center sm:justify-end items-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
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
      )}

      {/* Team Match Detail Modal */}
      <TeamMatchDetailModal
        isOpen={!!selectedMatch}
        onClose={() => setSelectedMatch(null)}
        matchDetails={selectedMatch}
      />
    </>
  );
}
