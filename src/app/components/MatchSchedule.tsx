import { useState, useEffect } from "react";
import { roundApi, Round } from "@/services/api";

interface Match {
  id: number;
  date: string;
  round: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  details: string;
}

export default function MatchSchedule() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
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

  // TODO: Add API call to fetch matches when selectedSeason changes
  useEffect(() => {
    if (selectedSeason) {
      // Fetch matches for the selected season
      setIsLoading(false);
    }
  }, [selectedSeason]);

  return (
    <div>
      <div className="bg-[#EE344D] rounded-xl h-[56px] flex items-center px-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Trận đấu
        </h2>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
          Mùa Giải
        </label>
        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          className="w-full min-w-[300px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
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

      {isLoading ? (
        <div className="text-center">Đang tải dữ liệu...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F3F3F3]">
                <th className="p-3 text-left">Ngày</th>
                <th className="p-3 text-left">Vòng</th>
                <th className="p-3 text-left">Đội nhà</th>
                <th className="p-3 text-left">Đội khách</th>
                <th className="p-3 text-left">Tỷ số</th>
                <th className="p-3 text-left">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {matches.length > 0 ? (
                matches.map((match) => (
                  <tr key={match.id} className="border-b border-[#DFDFDF]">
                    <td className="p-3">{match.date}</td>
                    <td className="p-3">{match.round}</td>
                    <td className="p-3">{match.homeTeam}</td>
                    <td className="p-3">{match.awayTeam}</td>
                    <td className="p-3">{match.score}</td>
                    <td className="p-3">
                      <a href="#" className="text-[#EE344D] hover:underline">
                        {match.details}
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-3 text-center">
                    Không có trận đấu nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
