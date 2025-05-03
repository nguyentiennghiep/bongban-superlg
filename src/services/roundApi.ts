import { fetchApi, ApiResponse } from "./common";

export interface Round {
  id: string;
  ma_vongdau: string;
  ten_vongdau: string;
  mua_giai_id: string;
  mua_giai_ten: string;
  ngay_bat_dau: number;
  ngay_ket_thuc: number;
  mo_ta: string;
  trang_thai: number;
  stt: number;
}

export const roundApi = {
  getRounds: async (
    page: number = 1,
    resultsPerPage: number = 20
  ): Promise<ApiResponse<Round>> => {
    const response = await fetchApi<Round>("/get_round", {
      page,
      results_per_page: resultsPerPage,
    });

    if ("objects" in response) {
      return response as ApiResponse<Round>;
    }

    return {
      objects: [response as Round],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },

  filterRounds: async (mua_giai_id: string): Promise<ApiResponse<Round>> => {
    const response = await fetchApi<Round>("/filter_vong_dau", { mua_giai_id });

    if ("objects" in response) {
      return response as ApiResponse<Round>;
    }

    return {
      objects: [response as Round],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};
