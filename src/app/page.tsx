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

      {/* Xếp hạng */}
      <div className="container mx-auto">
        <Ranking showTitle />
      </div>

      {/* Các cây vợt có phong độ tốt nhất */}
      <div className="container mx-auto">
        <TopPlayers />
      </div>

      {/* Lịch thi đấu tuần kế tiếp */}
      <div className="container mx-auto pb-6 sm:pb-10">
        <MatchSchedule />
      </div>
      <Introduction />
      <NewsEvents />
    </div>
  );
}
