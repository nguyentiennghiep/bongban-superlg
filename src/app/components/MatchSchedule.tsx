export default function MatchSchedule() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Title with red background */}
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Lịch thi đấu tuần kế tiếp
        </h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Vòng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Bảng
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white text-left h-[42px]">
              <th className="px-4 w-[80px] font-[600] text-[14px] leading-[22px] font-roboto">
                Thứ tự
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Đội chủ nhà
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Đội khách
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Ngày/Giờ
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Sân thi đấu
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Đường đi
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                order: 1,
                homeTeam: "Rồng Xanh",
                awayTeam: "Bàn Rồng Lửa",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 2,
                homeTeam: "Sấm Xoáy",
                awayTeam: "Cơn Lốc Xoáy",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 3,
                homeTeam: "Hổ Võ",
                awayTeam: "Đội Hổ Văn",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 4,
                homeTeam: "Bóng Ma",
                awayTeam: "Sấm Sét Ping Pong",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 5,
                homeTeam: "Lửa Việt",
                awayTeam: "Bóng Bàn Sao Băng",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 6,
                homeTeam: "Ánh Chớp",
                awayTeam: "Vũ Điệu Xanh",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 7,
                homeTeam: "Bàn Thép",
                awayTeam: "Kiếm Thủ Bóng Bàn",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
              {
                order: 8,
                homeTeam: "Sao Mai",
                awayTeam: "Bóng Bàn Thiên Thần",
                datetime: "11/5/2025 - 16h30",
                venue: "Gia Lâm",
                direction: "https://www.google.com/maps/?hl=vi",
              },
            ].map((match, index) => (
              <tr
                key={index}
                className={`text-black font-roboto font-[400] text-[14px] leading-[22px] h-[42px] ${
                  index % 2 === 1 ? "bg-[#FFE5E5]" : ""
                }`}
              >
                <td className="px-4">{match.order}</td>
                <td className="px-4">{match.homeTeam}</td>
                <td className="px-4">{match.awayTeam}</td>
                <td className="px-4">{match.datetime}</td>
                <td className="px-4">{match.venue}</td>
                <td className="px-4">
                  <a
                    href={match.direction}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A3FF] hover:underline"
                  >
                    {match.direction}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
