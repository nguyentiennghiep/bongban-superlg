"use client";

import { useState } from "react";
import Ranking from "@/app/components/Ranking";
import Breadcrumb from "@/app/components/Breadcrumb";
import TopPlayers from "@/app/components/TopPlayers";
import TournamentFilters from "../tournaments/components/TournamentFilters";
import MatchesTable from "../tournaments/components/MatchesTable";
import { roundApi, Round, matchScheduleApi, MatchSchedule } from "@/services";
import { useEffect } from "react";

// Wrapper component to remove padding only in ranking page
const RankingWrapper = () => {
  return (
    <div className="-mx-4 sm:-mx-6">
      <Ranking showTitle />
      <TopPlayers />
    </div>
  );
};

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<"ranking" | "tournaments">(
    "tournaments"
  );
  const [matches, setMatches] = useState<MatchSchedule[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedRound, setSelectedRound] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedMatchRound, setSelectedMatchRound] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_id);
          }
        }
      } catch (error) {
        console.error("Error fetching seasons:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeasons();
  }, []);

  useEffect(() => {
    const fetchMatches = async () => {
      if (!selectedSeason) return;

      setIsLoading(true);
      try {
        const response = await matchScheduleApi.getMatchSchedules(
          selectedSeason,
          currentPage,
          20,
          selectedRound,
          selectedGroup,
          selectedMatchRound
        );
        if ("objects" in response) {
          setMatches(response.objects);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [
    selectedSeason,
    selectedRound,
    selectedGroup,
    selectedMatchRound,
    currentPage,
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumb />

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Lịch thi đấu và Bảng xếp hạng
        </h1>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 sm:mb-6">
          <button
            className={`px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base ${
              activeTab === "tournaments"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setActiveTab("tournaments")}
          >
            Lịch thi đấu
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base ${
              activeTab === "ranking"
                ? "bg-[#EE344D] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setActiveTab("ranking")}
          >
            Bảng xếp hạng
          </button>
        </div>

        {activeTab === "ranking" ? (
          <RankingWrapper />
        ) : (
          <>
            <TournamentFilters
              seasons={seasons}
              selectedSeason={selectedSeason}
              onSeasonChange={(season) => {
                setSelectedSeason(season);
                setSelectedRound("");
                setSelectedGroup("");
                setSelectedMatchRound("");
                setCurrentPage(1);
              }}
              onRoundChange={(round) => {
                setSelectedRound(round);
                setSelectedGroup("");
                setCurrentPage(1);
              }}
              onGroupChange={(group) => {
                setSelectedGroup(group);
                setCurrentPage(1);
              }}
              onMatchRoundChange={(round) => {
                setSelectedMatchRound(round);
                setCurrentPage(1);
              }}
            />

            <MatchesTable
              matches={matches}
              isLoading={isLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </main>
  );
}
