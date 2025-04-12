interface Match {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  round: string;
}

interface MatchesTableProps {
  matches: Match[];
  isLoading: boolean;
}

export default function MatchesTable({
  matches,
  isLoading,
}: MatchesTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-black text-white text-left h-[42px]">
          <tr>
            <th className="px-2 sm:px-4 w-12 sm:w-16 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
              Thứ tự
            </th>
            <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
              Ngày thi đấu
            </th>
            <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
              Đội nhà
            </th>
            <th className="px-2 w-[40px] sm:w-[60px]"></th>
            <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
              Đội khách
            </th>
            <th className="px-2 sm:px-4 font-[600] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] font-roboto">
              Vòng đấu
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="py-4 text-center">
                Đang tải dữ liệu...
              </td>
            </tr>
          ) : matches.length > 0 ? (
            matches.map((match, index) => (
              <tr
                key={match.id}
                className={index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"}
              >
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {match.id}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {match.date}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {match.homeTeam}
                </td>
                <td className="py-2 sm:py-3 px-2 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black text-center">
                  VS
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {match.awayTeam}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-roboto text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
                  {match.round}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-4 text-center">
                Không có trận đấu nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
