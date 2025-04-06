import Image from "next/image";

interface Player {
  id: number;
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  totalPoints: string;
  avatarUrl?: string;
}

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="overflow-hidden rounded-lg w-[280px]">
      <div className="p-6 pb-4 bg-[#F3F3F3]">
        <div className="mb-4">
          <div className="w-[146px] h-[146px] rounded-full border-4 border-gray-300 mx-auto overflow-hidden">
            <Image
              src={player.avatarUrl || "/images/default-avatar.jpg"}
              alt={player.name}
              width={146}
              height={146}
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-['Roboto'] font-[600] text-[20px] leading-[28px] text-black mb-1 text-center">
          {player.name}
        </h3>
        <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-black mb-4 text-center">
          Năm sinh: {player.birthYear}
        </p>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="grid grid-cols-1">
          <div className="px-6 py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-3">
              <span className="font-['Roboto'] font-normal text-[16px] leading-[24px] text-black">
                Hạng
              </span>
              <span className="font-['Roboto'] font-[600] text-[16px] leading-[24px] text-black text-right">
                {player.rank}
              </span>
            </div>
          </div>
          <div className="px-6 py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-3">
              <span className="font-['Roboto'] font-normal text-[16px] leading-[24px] text-black">
                Điểm tích lũy
              </span>
              <span className="font-['Roboto'] font-[600] text-[16px] leading-[24px] text-black text-right">
                {player.rankPoints}
              </span>
            </div>
          </div>
          <div className="px-6 py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center">
              <span className="font-['Roboto'] font-normal text-[16px] leading-[24px] text-black">
                Tổng điểm
              </span>
              <span className="font-['Roboto'] font-[600] text-[16px] leading-[24px] text-black text-right">
                {player.totalPoints}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
