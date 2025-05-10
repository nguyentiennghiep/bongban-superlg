"use client";

import Ranking from "@/app/components/Ranking";
import Breadcrumb from "@/app/components/Breadcrumb";
import TopPlayers from "@/app/components/TopPlayers";

export default function RankingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <Breadcrumb />

      {/* Title */}
      <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-6 sm:mb-8 text-black">
        Bảng xếp hạng
      </h1>

      <Ranking showTitle />
      <TopPlayers />
    </div>
  );
}
