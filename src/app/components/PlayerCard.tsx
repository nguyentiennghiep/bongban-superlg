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
      <div className="p-4 sm:p-6 pb-2 sm:pb-4 bg-[#F3F3F3]">
        <div className="mb-3 sm:mb-4">
          <div className="w-[100px] h-[100px] sm:w-[146px] sm:h-[146px] rounded-full border-4 border-gray-300 mx-auto overflow-hidden">
            <Image
              src={player.avatarUrl || "/images/default-avatar.jpg"}
              alt={player.name}
              width={146}
              height={146}
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-['Roboto'] font-[600] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-black mb-1 text-center">
          <Link href={`/players/${player.id}`} className="hover:text-blue-600">
            {player.name}
          </Link>
        </h3>
        <p className="font-['Roboto'] font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black mb-3 sm:mb-4 text-center">
          Năm sinh: {player.birthYear}
        </p>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="grid grid-cols-1">
          <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-2 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Hạng
              </span>
              <span className="font-['Roboto'] font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black text-right">
                {player.rank}
              </span>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-2 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Điểm ban đầu
              </span>
              <span className="font-['Roboto'] font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black text-right">
                {player.rankPoints}
              </span>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center border-b border-[#DFDFDF] pb-2 sm:pb-3">
              <span className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Điểm tích lũy
              </span>
              <span className="font-['Roboto'] font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black text-right">
                {player.accumulatedPoints}
              </span>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center">
              <span className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                Tổng điểm
              </span>
              <span className="font-['Roboto'] font-[600] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black text-right">
                {(
                  parseInt(player.accumulatedPoints) +
                  parseInt(player.rankPoints)
                ).toString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
