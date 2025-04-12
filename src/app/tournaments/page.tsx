"use client";

import { useState, useEffect } from "react";
import { roundApi, Round } from "@/services/api";
import Breadcrumb from "./components/Breadcrumb";
import TournamentFilters from "./components/TournamentFilters";
import MatchesTable from "./components/MatchesTable";

interface Match {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  round: string;
}

export default function TournamentsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [matches, setMatches] = useState<Match[]>([]);
  const [seasons, setSeasons] = useState<Round[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await roundApi.getRounds();
        if ("objects" in response) {
          setSeasons(response.objects);
          if (response.objects.length > 0) {
            setSelectedSeason(response.objects[0].mua_giai_ten);
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

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumb />

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-6 sm:mb-8 text-black">
          Giải đấu
        </h1>

        <TournamentFilters
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={setSelectedSeason}
        />

        <MatchesTable matches={matches} isLoading={isLoading} />
      </div>
    </main>
  );
}
