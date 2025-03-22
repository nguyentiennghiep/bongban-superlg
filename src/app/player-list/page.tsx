"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const players = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    birthYear: 1980,
    team: "Hà Đông",
    rank: "C1",
    accumulatedPoints: "+80",
    totalPoints: "1.380",
  },
  {
    id: 2,
    name: "Trần Văn B",
    birthYear: 1992,
    team: "Hà Nội",
    rank: "B2",
    accumulatedPoints: "+120",
    totalPoints: "1.500",
  },
  {
    id: 3,
    name: "Lê Thị C",
    birthYear: 1985,
    team: "Đà Nẵng",
    rank: "A1",
    accumulatedPoints: "+200",
    totalPoints: "1.700",
  },
];

const PlayerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 w-full min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-6 text-primary">Danh sách VĐV</h1>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm VĐV..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mb-6 text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Bảng danh sách */}
      <div className="w-full overflow-x-auto">
        <table className="w-full shadow-md rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 text-left">Họ và Tên</th>
              <th className="py-3 px-4 text-left">Năm Sinh</th>
              <th className="py-3 px-4 text-left">Đội</th>
              <th className="py-3 px-4 text-left">Hạng</th>
              <th className="py-3 px-4 text-left">Điểm Tích Lũy</th>
              <th className="py-3 px-4 text-left">Tổng Điểm</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr
                key={player.id}
                className="border-b last:border-none hover:bg-gray-200 transition text-gray-700 cursor-pointer"
                onClick={() => router.push(`/player-list/${player.id}`)}
              >
                <td className="py-3 px-4 font-semibold text-primary">
                  {player.name}
                </td>
                <td className="py-3 px-4">{player.birthYear}</td>
                <td className="py-3 px-4">{player.team}</td>
                <td className="py-3 px-4">{player.rank}</td>
                <td className="py-3 px-4">{player.accumulatedPoints}</td>
                <td className="py-3 px-4 font-bold text-secondary">
                  {player.totalPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Page() {
  return <PlayerList />;
}
