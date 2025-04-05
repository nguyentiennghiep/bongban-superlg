"use client";

import Link from "next/link";

interface Match {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  round: string;
}

export default function TournamentsPage() {
  const matches: Match[] = [
    {
      id: 1,
      date: "11/5/2025 - 16h30",
      homeTeam: "Bàn Rồng Lửa",
      awayTeam: "Rồng Xanh",
      round: "Vòng Bảng 2",
    },
    {
      id: 2,
      date: "11/5/2025 - 16h30",
      homeTeam: "Cơn Lốc Xoáy",
      awayTeam: "Sấm Xoáy",
      round: "Vòng Bảng 2",
    },
    {
      id: 3,
      date: "11/5/2025 - 16h30",
      homeTeam: "Đội Hổ Vằn",
      awayTeam: "Hổ Võ",
      round: "Vòng Bảng 2",
    },
    {
      id: 4,
      date: "11/5/2025 - 16h30",
      homeTeam: "Sấm Sét Ping Pong",
      awayTeam: "Bóng Ma",
      round: "Vòng Bảng 2",
    },
    {
      id: 5,
      date: "11/5/2025 - 16h30",
      homeTeam: "Bóng Bàn Sao Băng",
      awayTeam: "Lửa Việt",
      round: "Vòng Bảng 2",
    },
    {
      id: 6,
      date: "11/5/2025 - 16h30",
      homeTeam: "Vũ Điệu Xanh",
      awayTeam: "Ánh Chớp",
      round: "Vòng Bảng 2",
    },
    {
      id: 7,
      date: "11/5/2025 - 16h30",
      homeTeam: "Kiếm Thủ Bóng Bàn",
      awayTeam: "Bàn Thép",
      round: "Vòng Bảng 2",
    },
    {
      id: 8,
      date: "11/5/2025 - 16h30",
      homeTeam: "Bóng Bàn Thiên Thần",
      awayTeam: "Sao Mai",
      round: "Vòng Bảng 2",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/" className="text-black">
            Trang chủ
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">Giải đấu</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-[38px] leading-[46px] mb-8 text-black">
          Giải đấu
        </h1>

        {/* Filters */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div>
            <label className="block mb-2 font-roboto font-[600] text-[14px] leading-[22px] text-black">
              Mùa Giải
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Hà Nội SPL 2024</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-[14px] leading-[22px] text-black">
              Hạng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Series A</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-[14px] leading-[22px] text-black">
              Đội
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Vui lòng chọn</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-roboto font-[600] text-[14px] leading-[22px] text-black">
              Vòng đấu
            </label>
            <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
              <option>Vòng Bảng 2</option>
            </select>
          </div>
        </div>

        {/* Matches Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                  Thứ tự
                </th>
                <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                  Ngày thi đấu
                </th>
                <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                  Đội nhà
                </th>
                <th className="py-3 px-2 w-[60px]"></th>
                <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                  Đội khách
                </th>
                <th className="py-3 px-4 text-left font-roboto font-[600] text-[14px] leading-[22px]">
                  Vòng đấu
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
                    {match.homeTeam}
                  </td>
                  <td className="py-3 px-2 font-roboto text-[14px] leading-[22px] text-black text-center">
                    VS
                  </td>
                  <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                    {match.awayTeam}
                  </td>
                  <td className="py-3 px-4 font-roboto text-[14px] leading-[22px] text-black">
                    {match.round}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
