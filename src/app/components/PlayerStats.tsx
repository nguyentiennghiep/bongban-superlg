import Image from "next/image";
import { useState, useEffect } from "react";
import { roundApi, Round } from "@/services";
import { RankingHistoryItem } from "@/services/rankingHistory";

interface PlayerStatsProps {
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  accumulatedPoints: string;

  winRate: {
    total: number;
    wins: number;
    losses: number;
    percentage: number;
  };
  avatarUrl?: string;
  notes?: string;
  totalPoints?: string;
  rankingHistoryList?: RankingHistoryItem[];
}

export default function PlayerStats({
  name,
  birthYear,
  rank,
  rankPoints,
  accumulatedPoints,
  winRate,
  avatarUrl,
  notes,
  totalPoints,
  rankingHistoryList,
}: PlayerStatsProps) {
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");

  // Thứ tự các hạng từ cao đến thấp
  const rankOrder = [
    "C1",
    "C2",
    "D1",
    "D2",
    "E1",
    "E2",
    "F1",
    "F2",
    "G1",
    "G2",
    "H1",
    "H2",
  ];
  const getRankIndex = (rank: string) => rankOrder.indexOf(rank);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          // Set the first season as default if available
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_ten);
          }
        }
      } catch (error) {
        console.error("Error fetching seasons:", error);
      }
    };

    fetchSeasons();
  }, []);

  return (
    <div className="bg-[#F3F3F3] rounded-lg p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-4 sm:gap-8">
        {/* Left Column - Avatar and Name */}
        <div className="w-full sm:w-[240px]">
          <div className="w-[120px] h-[120px] sm:w-[175px] sm:h-[175px] relative mb-4 mx-auto">
            <Image
              src={avatarUrl ? avatarUrl : "/images/default-avatar.jpg"}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-roboto font-[600] text-lg sm:text-[20px] leading-[24px] sm:leading-[28px] text-black text-center mb-1 px-2">
            {name}
          </h2>
          <p className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black text-center">
            Năm sinh: {birthYear}
          </p>
        </div>

        {/* Right Column - Stats */}
        <div className="sm:ml-[40px]">
          <h3 className="font-roboto font-[600] text-lg sm:text-[20px] leading-[24px] sm:leading-[28px] text-black mb-4">
            Thành tích cá nhân
          </h3>

          <div className="grid gap-2">
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Hạng
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {rank}
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Điểm ban đầu
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {rankPoints}
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Điểm tích lũy
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {accumulatedPoints}
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Tổng điểm
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {totalPoints}
              </span>
            </div>
            {notes && (
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[100px_1fr] items-center">
                <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  Ghi chú
                </span>
                <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {notes}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 sm:mt-6">
            {/* Flex row: Lên/xuống hạng và Mùa Giải */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              {/* Lên/xuống hạng */}
              <div className="w-full sm:w-[150px]">
                <h4 className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-2">
                  Lên/xuống hạng
                </h4>
                <div>
                  {rankingHistoryList && rankingHistoryList.length > 0 ? (
                    <ul className="space-y-2">
                      {rankingHistoryList.map((item, idx) => {
                        let up = false,
                          down = false;
                        if (item.hang_cu && item.hang_moi) {
                          const idxOld = getRankIndex(item.hang_cu);
                          const idxNew = getRankIndex(item.hang_moi);
                          up = idxNew < idxOld;
                          down = idxNew > idxOld;
                        }
                        let arrow = "→";
                        let color = "text-gray-500";
                        if (up) {
                          arrow = "▲";
                          color = "text-green-600";
                        } else if (down) {
                          arrow = "▼";
                          color = "text-red-600";
                        }
                        return (
                          <li
                            key={item.id || idx}
                            className="flex items-center"
                          >
                            <span className="font-roboto text-sm text-black w-[80px]">
                              {item.formatted_thoigian_ghinhan}
                            </span>
                            <span className="font-roboto text-sm text-black">
                              {item.hang_cu}
                            </span>
                            <span className={`mx-1 font-bold ${color}`}>
                              {arrow}
                            </span>
                            <span className="font-roboto text-sm text-black">
                              {item.hang_moi}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="font-roboto text-sm text-black text-center italic">
                      Không có dữ liệu
                    </div>
                  )}
                </div>
              </div>
              {/* Mùa giải */}
              <div className="w-full sm:border-l sm:pl-6 sm:ml-6">
                <h4 className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-2">
                  Mùa Giải
                </h4>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full p-[6px] pr-[6px] rounded bg-white text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px] mb-4"
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
            </div>
            {/* Grid thống kê tổng số trận, thắng, thua, tỷ lệ thắng */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div>
                <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                  Tổng số trận đấu
                </div>
                <div className="font-roboto font-[600] text-xl sm:text-[30px] leading-[24px] sm:leading-[38px] text-black">
                  {winRate.total}
                </div>
              </div>
              <div>
                <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                  Thắng
                </div>
                <div className="font-roboto font-[600] text-xl sm:text-[30px] leading-[24px] sm:leading-[38px] text-black">
                  {winRate.wins}
                </div>
              </div>
              <div>
                <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                  Thua
                </div>
                <div className="font-roboto font-[600] text-xl sm:text-[30px] leading-[24px] sm:leading-[38px] text-black">
                  {winRate.losses}
                </div>
              </div>
              <div>
                <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                  Tỷ lệ % (thắng)
                </div>
                <div className="font-roboto font-[600] text-xl sm:text-[30px] leading-[24px] sm:leading-[38px] text-black">
                  {Math.round(winRate.percentage * 100) / 100}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
