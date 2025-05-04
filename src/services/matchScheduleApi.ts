import { fetchApi, ApiResponse } from "./common";

export interface MatchSchedule {
  id: string;
  ma_trandau: string;
  vong_dau_id: string;
  vong_dau_ten: string;
  mua_giai_id: string;
  mua_giai_ten: string;
  bang_dau_id: string;
  bang_dau_ten: string;
  doi_a_id: string;
  doi_a_ten: string;
  doi_b_id: string;
  doi_b_ten: string;
  ngay_thi_dau: number;
  gio_thi_dau: string;
  san_thi_dau: string;
  diachi_thi_dau: string;
  map_san_dau: string;
  diem_doi_a: number | null;
  diem_doi_b: number | null;
  doi_chien_thang: number | null;
  anh_lien_quan: Array<{
    id: string;
    link: string;
    name: string;
    size: number;
    type: string;
    created_at: number;
  }>;
  ket_qua: string | null;
  tiso_setdau: string | null;
  tongdiem_toanbo_setdau: string | null;
  doi_a_bo_cuoc: boolean | null;
  doi_b_bo_cuoc: boolean | null;
  trang_thai: number;
}

export const matchScheduleApi = {
  getMatchSchedules: async (
    mua_giai_id: string,
    page: number = 1,
    resultsPerPage: number = 20,
    vong_dau_id?: string,
    bang_dau_id?: string,
    luot_dau?: string
  ): Promise<ApiResponse<MatchSchedule>> => {
    const response = await fetchApi<MatchSchedule>("/lich_thi_dau", {
      mua_giai_id,
      page,
      results_per_page: resultsPerPage,
      ...(vong_dau_id && { vong_dau_id }),
      ...(bang_dau_id && { bang_dau_id }),
      ...(luot_dau && { luot_dau }),
    });

    if ("objects" in response) {
      return response as ApiResponse<MatchSchedule>;
    }

    return {
      objects: [response as MatchSchedule],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};
