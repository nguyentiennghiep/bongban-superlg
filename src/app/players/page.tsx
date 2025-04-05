"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlayersPage() {
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

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Đội bóng và vận động viên</h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-6">
        <button
          className={`px-6 py-2 rounded-sm ${
            activeTab === "team"
              ? "bg-[#EE344D] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("team")}
        >
          Đội
        </button>
        <button
          className={`px-6 py-2 rounded-sm ${
            activeTab === "player"
              ? "bg-[#EE344D] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("player")}
        >
          Vận động viên
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nhập tên đội để tìm kiếm"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="py-3 px-4 text-left w-16">STT</th>
              <th className="py-3 px-4 text-left">Tên đội</th>
              <th className="py-3 px-4 text-left">CLB Chủ quản</th>
              <th className="py-3 px-4 text-left">Liên hệ</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#E9E9E9]"}
              >
                <td className="py-3 px-4">{team.id}</td>
                <td className="py-3 px-4">
                  <Link
                    href={`/teams/${team.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {team.name}
                  </Link>
                </td>
                <td className="py-3 px-4">{team.club}</td>
                <td className="py-3 px-4">{team.contact}</td>
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
        <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
          2
        </span>
        <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
          3
        </span>
        <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
          4
        </span>
        <span className="w-8 h-8 flex items-center justify-center">...</span>
        <span className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
          »
        </span>
      </div>
    </main>
  );
}
