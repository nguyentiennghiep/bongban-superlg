import { notFound } from "next/navigation";

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

export default function PlayerDetail({
  params,
}: {
  params: { playerId: string };
}) {
  const player = players.find((p) => p.id.toString() === params.playerId);

  if (!player) return notFound();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#F8F9FA] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#0077B6]">Player Detail</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-[#0077B6] mb-6">
        <p className="text-xl font-semibold text-[#212529]">
          Họ và Tên: <span className="font-normal">{player.name}</span>
        </p>
        <p className="text-xl font-semibold text-[#212529]">
          Năm Sinh: <span className="font-normal">{player.birthYear}</span>
        </p>
        <p className="text-xl font-semibold text-[#212529]">
          Đội: <span className="font-normal">{player.team}</span>
        </p>
        <p className="text-xl font-semibold text-[#212529]">
          Hạng: <span className="font-normal">{player.rank}</span>
        </p>
        <p className="text-xl font-semibold text-[#212529]">
          Điểm Tích Lũy:{" "}
          <span className="font-normal">{player.accumulatedPoints}</span>
        </p>
        <p className="text-xl font-semibold text-[#212529]">
          Tổng Điểm: <span className="font-normal">{player.totalPoints}</span>
        </p>
      </div>

      <div className="mt-6">
        <a
          href="/player-list"
          className="text-white bg-[#0077B6] px-4 py-2 rounded shadow hover:bg-[#005f99] transition pt-2"
        >
          Quay lại danh sách
        </a>
      </div>
    </div>
  );
}
