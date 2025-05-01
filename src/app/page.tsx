"use client";
import Ranking from "./components/Ranking";
import TopPlayers from "./components/TopPlayers";
import MatchSchedule from "./components/MatchSchedule";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import NewsEvents from "./components/NewsEvents";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Banner />
      <Introduction />
      <NewsEvents />

      {/* Xếp hạng */}
      <div className="container mx-auto px-4 sm:px-6">
        <Ranking />
      </div>

      {/* Các cây vợt có phong độ tốt nhất */}
      <div className="container mx-auto px-4 sm:px-6">
        <TopPlayers />
      </div>

      {/* Lịch thi đấu tuần kế tiếp */}
      <div className="container mx-auto px-4 sm:px-6 pb-6 sm:pb-10">
        <MatchSchedule />
      </div>
    </div>
  );
}
