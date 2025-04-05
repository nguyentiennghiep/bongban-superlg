"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlayersTeamsPage() {
  const [activeTab, setActiveTab] = useState<"team" | "player">("team");

  const teams = [
    {
      id: 1,
      name: "Bản Rồng Lửa",
      club: "Rồng Lửa",
      contact: "Tầng 5 Tòa nhà 131 Trần Phú Hà Đông - 0979332555 - 098 8615338",
    },
    {
      id: 2,
      name: "Cơn Lốc Xoáy",
      club: "Hổ Võ",
      contact: "Tầng 5 Tòa A Chung cư goldseason 47 nguyễn tuân thanh xuân",
    },
    {
      id: 3,
      name: "Rồng Xanh",
      club: "Sấm Sét",
      contact: "Tầng KT tòa HH3.1 FLC Garden City, Đại Mỗ, Nam Từ Liêm, Hà Nội",
    },
    {
      id: 4,
      name: "Sấm Xoáy",
      club: "Bão Tố",
      contact:
        "Tầng 2 Tòa HH2B-CC Ecolakeview số 32 Đại Từ, P.Đại Kim, Q.Hoàng Mai, Hà Nội",
    },
    {
      id: 5,
      name: "Hổ Võ",
      club: "Cơn Lốc",
      contact:
        "Nhà văn hóa ngõ 495/3 B. Nguyễn Trãi, Thanh Xuân Nam, Thanh Xuân, Hà Nội (CLB Tôn Phủi)",
    },
    // ... thêm các đội khác tương tự
  ];

  const players = [
    {
      id: 1,
      name: "Bản Tay Vàng",
      team: "Rồng Lửa",
      rank: "A",
      rankPoints: "34.70",
      totalPoints: "184.70",
    },
    {
      id: 2,
      name: "Ánh Chớp",
      team: "Hổ Võ",
      rank: "B",
      rankPoints: "40.80",
      totalPoints: "148.00",
    },
    {
      id: 3,
      name: "Tia Chớp",
      team: "Sấm Sét",
      rank: "C",
      rankPoints: "10.20",
      totalPoints: "135.10",
    },
    {
      id: 4,
      name: "Bức Tường Thép",
      team: "Bão Tố",
      rank: "D",
      rankPoints: "18.80",
      totalPoints: "99.60",
    },
    {
      id: 5,
      name: "Áo Thuật Giao Bóng",
      team: "Cơn Lốc",
      rank: "E",
      rankPoints: "14.10",
      totalPoints: "95.60",
    },
  ];

  return (
    <main className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-center font-roboto font-[600] text-[38px] leading-[46px] mb-6 text-black">
          Đội bóng và vận động viên
        </h1>

        {/* Tabs */}
        <div className="flex gap-1 mb-6">
          <button
            className={`px-6 py-2 rounded-sm ${
              activeTab === "team"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setActiveTab("team")}
          >
            Đội
          </button>
          <button
            className={`px-6 py-2 rounded-sm ${
              activeTab === "player"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setActiveTab("player")}
          >
            Vận động viên
          </button>
        </div>

        {/* Search and Filters */}
        {activeTab === "team" ? (
          // Team search
          <div className="mb-6">
            <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
              Tên đội
            </label>
            <input
              type="text"
              placeholder="Nhập tên đội để tìm kiếm"
              className="w-full max-w-md p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
            />
          </div>
        ) : (
          // Player filters
          <div className="mb-6 flex gap-4">
            <div className="w-[120px]">
              <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
                Hạng
              </label>
              <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
                <option value="">Tất cả</option>
                <option value="A">Hạng A</option>
                <option value="B">Hạng B</option>
                <option value="C">Hạng C</option>
                <option value="D">Hạng D</option>
                <option value="E">Hạng E</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
                Họ và Tên
              </label>
              <input
                type="text"
                placeholder="Nhập tên vận động viên để tìm kiếm"
                className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
              />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-black text-white text-left h-[42px]">
                <th className="px-4 w-16 font-[600] text-[14px] leading-[22px] font-roboto">
                  STT
                </th>
                {activeTab === "team" ? (
                  <>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Tên đội
                    </th>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      CLB Chủ quản
                    </th>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Liên hệ
                    </th>
                  </>
                ) : (
                  <>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Tên
                    </th>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Đội
                    </th>
                    <th className="px-4 w-24 font-[600] text-[14px] leading-[22px] font-roboto">
                      Hạng
                    </th>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Điểm hạng
                    </th>
                    <th className="px-4 font-[600] text-[14px] leading-[22px] font-roboto">
                      Tích luỹ
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === "team"
                ? teams.map((team, index) => (
                    <tr
                      key={team.id}
                      className={`text-black font-roboto font-[400] text-[14px] leading-[22px] h-[42px] ${
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <td className="px-4">{team.id}</td>
                      <td className="px-4">
                        <Link
                          href={`/teams/${team.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {team.name}
                        </Link>
                      </td>
                      <td className="px-4">{team.club}</td>
                      <td className="px-4">{team.contact}</td>
                    </tr>
                  ))
                : players.map((player, index) => (
                    <tr
                      key={player.id}
                      className={`text-black font-roboto font-[400] text-[14px] leading-[22px] h-[42px] ${
                        index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <td className="px-4">{player.id}</td>
                      <td className="px-4">
                        <Link
                          href={`/players/${player.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {player.name}
                        </Link>
                      </td>
                      <td className="px-4">{player.team}</td>
                      <td className="px-4">{player.rank}</td>
                      <td className="px-4">{player.rankPoints}</td>
                      <td className="px-4">{player.totalPoints}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4">
          <span className="w-8 h-8 flex items-center justify-center bg-[#EE344D] text-white">
            1
          </span>
          <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black">
            2
          </span>
          <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black">
            3
          </span>
          <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black">
            4
          </span>
          <span className="w-8 h-8 flex items-center justify-center text-black">
            ...
          </span>
          <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-black">
            »
          </span>
        </div>
      </div>
    </main>
  );
}
