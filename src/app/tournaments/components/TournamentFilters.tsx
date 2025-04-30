import { Round } from "@/services/api";

interface TournamentFiltersProps {
  seasons: Round[];
  selectedSeason: string;
  onSeasonChange: (season: string) => void;
}

export default function TournamentFilters({
  seasons,
  selectedSeason,
  onSeasonChange,
}: TournamentFiltersProps) {
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
              <option key={season.id} value={season.mua_giai_ten}>
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
          Bảng
        </label>
        <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
          <option>Vui lòng chọn</option>
        </select>
      </div>
      <div>
        <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-black">
          Vòng đấu
        </label>
        <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
          <option>Vòng Bảng 2</option>
        </select>
      </div>
    </div>
  );
}
