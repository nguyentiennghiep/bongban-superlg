"use client";

import { useState } from "react";
import Link from "next/link";
import PlayerCard from "@/app/components/PlayerCard";
import MatchSchedule from "@/app/components/MatchSchedule";

interface Player {
  id: number;
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  totalPoints: string;
}

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const [selectedSeason, setSelectedSeason] = useState("Hà Nội SPL 2024");

  // Mock data - trong thực tế sẽ lấy từ API dựa vào params.id
  const teamData = {
    name: "An Thọ",
    club: "An Thọ",
    contact:
      "Đình làng thôn - An Thọ - An Khánh - HD - HN . Bùi Văn Huấn . Sđt : 0978251762",
  };

  const players: Player[] = [
    {
      id: 1,
      name: "Hoàng Danh Nhân",
      birthYear: "1963",
      rank: "C1",
      rankPoints: "+80",
      totalPoints: "1800",
    },
    {
      id: 2,
      name: "Hoàng Danh Nhân",
      birthYear: "1963",
      rank: "C1",
      rankPoints: "+80",
      totalPoints: "1800",
    },
    {
      id: 3,
      name: "Hoàng Danh Nhân",
      birthYear: "1963",
      rank: "C1",
      rankPoints: "+80",
      totalPoints: "1800",
    },
    {
      id: 4,
      name: "Hoàng Danh Nhân",
      birthYear: "1963",
      rank: "C1",
      rankPoints: "+80",
      totalPoints: "1800",
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
          <Link href="/players-teams" className="text-black">
            Đội và vận động viên
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">{teamData.name}</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-[38px] leading-[46px] mb-6 text-black">
          Thông tin đội
        </h1>

        {/* Team Info */}
        <div className="bg-[#F3F3F3] p-6 rounded-sm mb-8">
          <div className="grid grid-cols-[120px_1fr] gap-4 text-sm">
            <div className="font-[600] text-black">Tên đội</div>
            <div className="text-black">{teamData.name}</div>
            <div className="font-[600] text-black">CLB Chủ Quản</div>
            <div className="text-black">{teamData.club}</div>
            <div className="font-[600] text-black">Liên Hệ</div>
            <div className="text-black">{teamData.contact}</div>
          </div>
        </div>

        {/* Members Section */}
        <div>
          <div className="bg-[#EE344D] rounded-xl h-[56px] flex items-center px-4">
            <h2 className="text-white font-semibold text-[30px] leading-[38px]">
              Thành Viên
            </h2>
          </div>

          {/* Season Filter */}
          <div className="mb-6">
            <label className="block mb-2 font-roboto font-[600] text-[16px] leading-[24px] text-black">
              Mùa Giải
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-[200px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
            >
              <option value="Hà Nội SPL 2024">Hà Nội SPL 2024</option>
            </select>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {/* Match Schedule */}
          <MatchSchedule />
        </div>
      </div>
    </main>
  );
}
