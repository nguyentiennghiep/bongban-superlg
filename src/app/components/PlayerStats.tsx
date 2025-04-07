import Image from "next/image";

interface PlayerStatsProps {
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  totalPoints: string;
  matches: {
    date: string;
    round: string;
    result: string;
  }[];
  winRate: {
    total: number;
    wins: number;
    losses: number;
    percentage: number;
  };
  avatarUrl?: string;
}

export default function PlayerStats({
  name,
  birthYear,
  rank,
  rankPoints,
  totalPoints,
  matches,
  winRate,
  avatarUrl,
}: PlayerStatsProps) {
  return (
    <div className="bg-[#F3F3F3] rounded-lg p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-[175px_1fr] gap-4 sm:gap-8">
        {/* Left Column - Avatar and Name */}
        <div className="w-[240px]">
          <div className="w-[120px] h-[120px] sm:w-[175px] sm:h-[175px] relative mb-4 mx-auto">
            <Image
              src={avatarUrl ? avatarUrl : "/images/default-avatar.jpg"}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-roboto font-[600] text-lg sm:text-[20px] leading-[24px] sm:leading-[28px] text-black text-center mb-1">
            {name}
          </h2>
          <p className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black text-center">
            Năm sinh: {birthYear}
          </p>
        </div>

        {/* Right Column - Stats */}
        <div className="ml-[40px]">
          <h3 className="font-roboto font-[600] text-lg sm:text-[20px] leading-[24px] sm:leading-[28px] text-black mb-4">
            Thành tích cá nhân
          </h3>

          <div className="grid gap-2">
            <div className="grid grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Hạng
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {rank}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Điểm tích lũy
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {rankPoints}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] items-center">
              <span className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                Tổng điểm
              </span>
              <span className="font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                {totalPoints}
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <div className="w-full sm:w-[150px]">
                <h4 className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-2">
                  Lên/xuống
                </h4>
                <div>
                  <table className="inline-table">
                    <tbody>
                      {matches.map((match, index) => (
                        <tr key={index}>
                          <td className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black pr-[20px] whitespace-nowrap">
                            {match.date}
                          </td>
                          <td className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black whitespace-nowrap">
                            {match.round}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full">
                <h4 className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-2">
                  Mùa Giải
                </h4>
                <select className="w-full p-[6px] pr-[6px] rounded bg-white text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px] mb-4">
                  <option>Hà Nội SPL 2024</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                      Tổng số trận đấu
                    </div>
                    <div className="font-roboto font-[600] text-2xl sm:text-[30px] leading-[28px] sm:leading-[38px] text-black">
                      {winRate.total}
                    </div>
                  </div>
                  <div>
                    <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                      Thắng
                    </div>
                    <div className="font-roboto font-[600] text-2xl sm:text-[30px] leading-[28px] sm:leading-[38px] text-black">
                      {winRate.wins}
                    </div>
                  </div>
                  <div>
                    <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                      Thua
                    </div>
                    <div className="font-roboto font-[600] text-2xl sm:text-[30px] leading-[28px] sm:leading-[38px] text-black">
                      {winRate.losses}
                    </div>
                  </div>
                  <div>
                    <div className="font-roboto text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-1">
                      Tỷ lệ % (thắng)
                    </div>
                    <div className="font-roboto font-[600] text-2xl sm:text-[30px] leading-[28px] sm:leading-[38px] text-black">
                      {winRate.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
