import { fetchApi, ApiResponse } from "./common";

export interface RankingHistoryResponse {
  total: number;
  objects: RankingHistoryItem[];
}

export interface RankingHistoryItem {
  id: string;
  mua_giai_id: string;
  mua_giai_ten: string;
  vdv_id: string;
  vdv_ten: string;
  hang_cu: string;
  hang_moi: string;
  diem_tien_trinh_cu: number;
  diem_tien_trinh_moi: number;
  thoigian_ghinhan: number;
  formatted_thoigian_ghinhan?: string;
  loai: number;
  tac_nhan: number;
  created_at: number;
  created_by: string | null;
  updated_at: number;
  updated_by: string | null;
  deleted: boolean;
  deleted_by: string | null;
  deleted_at: number | null;
}

const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const rankingHistoryApi = {
  getPlayerRankingHistory: async (
    playerId: string,
    seasonId: string,
    page: number = 1,
    resultsPerPage: number = 20
  ): Promise<ApiResponse<RankingHistoryItem>> => {
    const params = {
      vdv_id: playerId,
      mua_giai_id: seasonId,
      page,
      results_per_page: resultsPerPage,
    };

    const response = await fetchApi<RankingHistoryItem>(
      "/lich_su_xep_hang",
      params
    );

    if ("objects" in response) {
      const formattedResponse = {
        ...response,
        objects: response.objects.map((item) => ({
          ...item,
          formatted_thoigian_ghinhan: formatTimestamp(item.thoigian_ghinhan),
        })),
      };
      return formattedResponse as ApiResponse<RankingHistoryItem>;
    }

    const formattedItem = {
      ...(response as RankingHistoryItem),
      formatted_thoigian_ghinhan: formatTimestamp(
        (response as RankingHistoryItem).thoigian_ghinhan
      ),
    };

    return {
      objects: [formattedItem],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};
