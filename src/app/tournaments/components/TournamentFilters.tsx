import { useState, useEffect } from "react";
import { Round, roundApi } from "@/services";
import { Group, groupApi } from "@/services/groupApi";

interface TournamentFiltersProps {
  seasons: Round[];
  selectedSeason: string;
  onSeasonChange: (season: string) => void;
  onRoundChange?: (round: string) => void;
  onGroupChange?: (group: string) => void;
}

export default function TournamentFilters({
  seasons,
  selectedSeason,
  onSeasonChange,
  onRoundChange,
  onGroupChange,
}: TournamentFiltersProps) {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [selectedRound, setSelectedRound] = useState("");
  const [isLoadingRounds, setIsLoadingRounds] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isLoadingGroups, setIsLoadingGroups] = useState(false);

  // Fetch rounds when season changes
  useEffect(() => {
    const fetchRounds = async () => {
      if (!selectedSeason) return;

      setIsLoadingRounds(true);
      try {
        const response = await roundApi.filterRounds(selectedSeason);
        if ("objects" in response) {
          setRounds(response.objects);
        }
      } catch (error) {
        console.error("Error fetching rounds:", error);
      } finally {
        setIsLoadingRounds(false);
      }
    };

    fetchRounds();
  }, [selectedSeason]);

  // Fetch groups when round changes
  useEffect(() => {
    const fetchGroups = async () => {
      if (!selectedRound) {
        setGroups([]);
        return;
      }

      setIsLoadingGroups(true);
      try {
        const response = await groupApi.filterGroups(selectedRound);
        if ("objects" in response) {
          setGroups(response.objects);
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setIsLoadingGroups(false);
      }
    };

    fetchGroups();
  }, [selectedRound]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <div>
        <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
          Mùa Giải
        </label>
        <select
          value={selectedSeason}
          onChange={(e) => onSeasonChange(e.target.value)}
          className="w-full min-w-[300px] p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
        >
          {seasons.length > 0 ? (
            seasons.map((season) => (
              <option key={season.id} value={season.mua_giai_id}>
                {season.mua_giai_ten}
              </option>
            ))
          ) : (
            <option value="">Đang tải...</option>
          )}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
          Vòng đấu
        </label>
        <select
          value={selectedRound}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedRound(value);
            setSelectedGroup(""); // Reset group when round changes
            onRoundChange?.(value);
          }}
          className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
        >
          <option value="">Tất cả</option>
          {isLoadingRounds ? (
            <option disabled>Đang tải...</option>
          ) : rounds.length > 0 ? (
            rounds.map((round) => (
              <option key={round.id} value={round.id}>
                {round.ten_vongdau}
              </option>
            ))
          ) : (
            <option disabled>Không có dữ liệu</option>
          )}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
          Bảng
        </label>
        <select
          value={selectedGroup}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedGroup(value);
            onGroupChange?.(value);
          }}
          className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
        >
          <option value="">Tất cả</option>
          {isLoadingGroups ? (
            <option disabled>Đang tải...</option>
          ) : groups.length > 0 ? (
            groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.ten_bangdau}
              </option>
            ))
          ) : (
            <option disabled>
              {selectedRound === "" ? "Chọn vòng đấu" : "Không có dữ liệu"}
            </option>
          )}
        </select>
      </div>
    </div>
  );
}
