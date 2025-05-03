import { fetchApi, ApiResponse } from "./common";

export interface Group {
  id: string;
  ma_bangdau: string;
  ten_bangdau: string;
  vong_dau_id: string;
  vong_dau_ten: string;
  mua_giai_id: string;
  mua_giai_ten: string;
}

export const groupApi = {
  filterGroups: async (vong_dau_id: string): Promise<ApiResponse<Group>> => {
    const response = await fetchApi<Group>("/filter_bang_dau", { vong_dau_id });

    if ("objects" in response) {
      return response as ApiResponse<Group>;
    }

    return {
      objects: [response as Group],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};
