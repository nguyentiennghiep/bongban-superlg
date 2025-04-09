"use client";
import { useState, useEffect } from "react";
import { roundApi, Round } from "@/services/api";

export default function Ranking() {
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
    <section className="container mx-auto px-6 py-12">
      <div className="bg-[#EE344D] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold text-[30px] leading-[38px]">
          Xếp Hạng
        </h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Mùa giải
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]"
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
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Hạng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Series A</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Vòng đấu
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-base leading-6 mb-2 text-black">
            Bảng
          </label>
          <select className="w-full p-[6px] pr-[6px] rounded bg-[#F3F3F3] text-black text-sm leading-[22px] border border-[#DFDFDF] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3.5%205.25L7%208.75L10.5%205.25%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.16667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_6px]">
            <option value="">Tất cả</option>
          </select>
        </div>
      </div>

      {/* Ranking Table */}
      {isLoading ? (
        <div className="text-center">Đang tải dữ liệu...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F3F3F3]">
                <th className="p-3 text-left">Hạng</th>
                <th className="p-3 text-left">Đội</th>
                <th className="p-3 text-left">Trận</th>
                <th className="p-3 text-left">Thắng</th>
                <th className="p-3 text-left">Hòa</th>
                <th className="p-3 text-left">Thua</th>
                <th className="p-3 text-left">Hiệu số</th>
                <th className="p-3 text-left">Điểm</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Add API call to fetch rankings */}
              <tr>
                <td colSpan={8} className="p-3 text-center">
                  Không có dữ liệu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
