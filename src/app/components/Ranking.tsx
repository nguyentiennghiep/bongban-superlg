export default function Ranking() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Xếp Hạng
        </h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Mùa giải
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Hà Nội SPL 2024</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Hạng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Series A</option>
          </select>
        </div>
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

      {/* Ranking Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white text-left h-[42px]">
              <th className="px-4 w-16 font-[600] text-[14px] leading-[22px] font-roboto">
                A
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Đội
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Điểm
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Vòng Thắng
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Vòng Thua
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Trận Thắng
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Trận Thua
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Sec Thắng
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Sec Thua
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                rank: 1,
                team: "Bàn Rồng Lửa",
                points: "24.70",
                roundWin: 8,
                roundLoss: 7,
                matchWin: 74,
                matchLoss: 55,
                secWin: 277,
                secLoss: 231,
              },
              {
                rank: 2,
                team: "Cơn Lốc Xoáy",
                points: "14.10",
                roundWin: 9,
                roundLoss: 6,
                matchWin: 71,
                matchLoss: 60,
                secWin: 276,
                secLoss: 245,
              },
              {
                rank: 3,
                team: "Đội Hổ Vằn",
                points: "9.20",
                roundWin: 6,
                roundLoss: 7,
                matchWin: 64,
                matchLoss: 53,
                secWin: 234,
                secLoss: 227,
              },
              {
                rank: 4,
                team: "Sấm Sét Ping Pong",
                points: "5.10",
                roundWin: 9,
                roundLoss: 6,
                matchWin: 66,
                matchLoss: 64,
                secWin: 271,
                secLoss: 265,
              },
              {
                rank: 5,
                team: "Bóng Bàn Sao Băng",
                points: "3.40",
                roundWin: 8,
                roundLoss: 7,
                matchWin: 64,
                matchLoss: 65,
                secWin: 261,
                secLoss: 252,
              },
              {
                rank: 6,
                team: "Đội Chiến Thắng",
                points: "3.20",
                roundWin: 7,
                roundLoss: 8,
                matchWin: 62,
                matchLoss: 67,
                secWin: 255,
                secLoss: 258,
              },
              {
                rank: 7,
                team: "Siêu Sao Bóng Bàn",
                points: "2.90",
                roundWin: 6,
                roundLoss: 9,
                matchWin: 59,
                matchLoss: 70,
                secWin: 248,
                secLoss: 265,
              },
              {
                rank: 8,
                team: "Đội Ánh Sáng",
                points: "2.50",
                roundWin: 5,
                roundLoss: 10,
                matchWin: 55,
                matchLoss: 74,
                secWin: 240,
                secLoss: 272,
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={`text-black font-roboto font-[400] text-[14px] leading-[22px] h-[42px] ${
                  index % 2 === 1 ? "bg-[#FFE5E5]" : ""
                }`}
              >
                <td className="px-4">{item.rank}</td>
                <td className="px-4">{item.team}</td>
                <td className="px-4">{item.points}</td>
                <td className="px-4">{item.roundWin}</td>
                <td className="px-4">{item.roundLoss}</td>
                <td className="px-4">{item.matchWin}</td>
                <td className="px-4">{item.matchLoss}</td>
                <td className="px-4">{item.secWin}</td>
                <td className="px-4">{item.secLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
