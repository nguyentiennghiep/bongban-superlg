import Image from "next/image";
import Link from "next/link";

interface Player {
  id: string;
  name: string;
  birthYear: string;
  rank: string;
  rankPoints: string;
  totalPoints: string;
  accumulatedPoints: string;
  avatarUrl?: string;
}

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="overflow-hidden rounded-lg w-full">
      <div className="p-2 sm:p-6 pb-2 sm:pb-4 bg-[#F3F3F3]">
        <div className="mb-2 sm:mb-4">
          <div className="relative w-[80px] h-[80px] sm:w-[146px] sm:h-[146px] rounded-full border-2 sm:border-4 border-gray-300 mx-auto overflow-hidden">
            <Image
              src={player.avatarUrl || "/images/default-avatar.jpg"}
              alt={player.name}
              fill
              sizes="(max-width: 640px) 80px, 146px"
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="font-['Roboto'] font-[600] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[28px] text-black mb-1 text-center">
          <Link href={`/players/${player.id}`} className="hover:text-blue-600">
            {player.name}
          </Link>
        </h3>
        <p className="font-['Roboto'] font-normal text-[10px] sm:text-[14px] leading-[16px] sm:leading-[22px] text-black mb-2 sm:mb-4 text-center">
          Năm sinh: {player.birthYear}
        </p>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="grid grid-cols-1">
          <div className="px-2 sm:px-6 py-1 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-1 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black">
                Hạng
              </span>
              <span className="font-['Roboto'] font-[600] text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black text-right">
                {player.rank}
              </span>
            </div>
          </div>
          <div className="px-2 sm:px-6 py-1 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-1 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black">
                Điểm ban đầu
              </span>
              <span className="font-['Roboto'] font-[600] text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black text-right">
                {player.rankPoints}
              </span>
            </div>
          </div>
          <div className="px-2 sm:px-6 py-1 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-1 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black">
                Điểm tích lũy
              </span>
              <span className="font-['Roboto'] font-[600] text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black text-right">
                {player.accumulatedPoints}
              </span>
            </div>
          </div>
          <div className="px-2 sm:px-6 py-1 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center">
              <span className="font-['Roboto'] font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black">
                Tổng điểm
              </span>
              <span className="font-['Roboto'] font-[600] text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-black text-right">
                {player.totalPoints}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
