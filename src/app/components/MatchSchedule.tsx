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
  const matches: Match[] = [
    {
      id: 1,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 1",
      homeTeam: "Rồng Xanh",
      awayTeam: "Bàn Rồng Lửa",
      score: "7-2",
      details: "Chi tiết",
    },
    {
      id: 2,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 2",
      homeTeam: "Sấm Xoáy",
      awayTeam: "Cơn Lốc Xoáy",
      score: "7-2",
      details: "Chi tiết",
    },
    {
      id: 3,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 3",
      homeTeam: "Hổ Võ",
      awayTeam: "Đội Hổ Vằn",
      score: "3-6",
      details: "Chi tiết",
    },
    {
      id: 4,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 4",
      homeTeam: "Bóng Ma",
      awayTeam: "Sấm Sét Ping Pong",
      score: "3-6",
      details: "Chi tiết",
    },
    {
      id: 5,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 5",
      homeTeam: "Lửa Việt",
      awayTeam: "Bóng Bàn Sao Băng",
      score: "4-5",
      details: "Chi tiết",
    },
    {
      id: 6,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 6",
      homeTeam: "Ánh Chớp",
      awayTeam: "Vũ Điệu Xanh",
      score: "5-4",
      details: "Chi tiết",
    },
    {
      id: 7,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 7",
      homeTeam: "Bàn Thép",
      awayTeam: "Kiếm Thủ Bóng Bàn",
      score: "3-6",
      details: "Chi tiết",
    },
    {
      id: 8,
      date: "11/5/2025 - 16h30",
      round: "Vòng Bảng 8",
      homeTeam: "Sao Mai",
      awayTeam: "Bóng Bàn Thiên Thần",
      score: "5-4",
      details: "Chi tiết",
    },
  ];

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
        <select className="w-[200px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
          <option value="Hà Nội SPL 2024">Hà Nội SPL 2024</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                STT
              </th>
              <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                Ngày thi đấu
              </th>
              <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                Vòng đấu
              </th>
              <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                Đội nhà
              </th>
              <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                Đội khách
              </th>
              <th className="py-3 px-4 text-center font-roboto font-[600] text-[14px] leading-[22px]">
                Tỉ số
              </th>
              <th className="py-3 px-4 text-center font-roboto font-[600] text-[14px] leading-[22px]">
                Chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr
                key={match.id}
                className={index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"}
              >
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                  {match.id}
                </td>
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                  {match.date}
                </td>
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                  {match.round}
                </td>
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                  {match.homeTeam}
                </td>
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                  {match.awayTeam}
                </td>
                <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black text-center">
                  {match.score}
                </td>
                <td className="py-3 px-4 text-center">
                  <a
                    href="#"
                    className="text-[#0066CC] hover:underline font-roboto text-[14px] leading-[22px]"
                  >
                    {match.details}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
