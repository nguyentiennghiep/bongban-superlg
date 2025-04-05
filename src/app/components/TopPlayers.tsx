"use client";
import { useState } from "react";

export default function TopPlayers() {
  const [activeTab, setActiveTab] = useState("series-a");

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Title with red background */}
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Các cây vợt có phong độ tốt nhất
        </h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
            Vòng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Vui lòng chọn</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#DFDFDF] mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("series-a")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "series-a"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Series A
          </button>
          <button
            onClick={() => setActiveTab("super-cup")}
            className={`pb-2 text-sm font-medium relative ${
              activeTab === "super-cup"
                ? "text-[#EE344D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EE344D]"
                : "text-[#999999]"
            }`}
          >
            Siêu cúp
          </button>
        </div>
      </div>

      {/* Players Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white text-left h-[42px]">
              <th className="px-4 w-[100px] font-[600] text-[14px] leading-[22px] font-roboto whitespace-nowrap">
                Xếp hạng
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Tên
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Hạng
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Điểm Tích Lũy
              </th>
              <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                Điểm Tích Lũy Tuần
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                rank: 1,
                name: "Nguyen Minh Hùng",
                level: "D",
                points: "34.70",
                weeklyPoints: "184.70",
              },
              {
                rank: 2,
                name: "Trịnh Xuân Hoàng Sơn",
                level: "C",
                points: "40.80",
                weeklyPoints: "148.00",
              },
              {
                rank: 3,
                name: "Trịnh Đình Nghĩa",
                level: "D",
                points: "10.20",
                weeklyPoints: "135.10",
              },
              {
                rank: 4,
                name: "Nguyễn Văn Vũ",
                level: "D",
                points: "18.80",
                weeklyPoints: "99.60",
              },
              {
                rank: 5,
                name: "Phạm Đăng An",
                level: "E",
                points: "14.10",
                weeklyPoints: "95.60",
              },
            ].map((player, index) => (
              <tr
                key={index}
                className={`text-black font-roboto font-[400] text-[14px] leading-[22px] h-[42px] ${
                  index % 2 === 1 ? "bg-[#FFE5E5]" : ""
                }`}
              >
                <td className="px-4">{player.rank}</td>
                <td className="px-4">{player.name}</td>
                <td className="px-4">{player.level}</td>
                <td className="px-4">{player.points}</td>
                <td className="px-4">{player.weeklyPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
