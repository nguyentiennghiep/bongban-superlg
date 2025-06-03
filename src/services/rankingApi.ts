import { fetchApi, ApiResponse } from "./common";

export interface TeamRanking {
  id: string;
  mua_giai_id: string;
  mua_giai_ten: string;
  doi_bong_id: string;
  doi_bong_ten: string;
  ten_doi_theo_muagiai: string | null;
  doi_bong_logo_url: string | null;
  doi_bong_banner_url: string | null;
  soluong_vdv: number;
  doi_truong_id: string | null;
  doi_truong_ten: string | null;
  huan_luyen_vien: string | null;
  sodienthoai: string | null;
  email: string | null;
  ten_doi: string;
  diem_mua_giai: number;
  so_tran_thang: number;
  so_tran_thua: number;
  tong_so_tran: number;
  tong_so_set_thang: number;
  tong_so_set_thua: number;
  tong_so_luot: number;
  tong_so_tran_con_thang: number;
  tongso_thang_don: number;
  tongso_thang_don_bo_cuoc: number;
  tongso_thang_doi: number;
  tongso_thang_doi_bo_cuoc: number;
}

export interface AthleteRanking {
  id: string;
  mua_giai_id: string;
  mua_giai_ten: string;
  doi_bong_id: string;
  doi_bong_ten: string;
  vdv_id: string;
  vdv_ten: string;
  vdv_hang: string;
  diem_tich_luy: number;
  vdv_diem: number;
  vdv_avatar_url: string;
  ghi_chu: string;
  so_tran_thang: number;
  so_tran_thua: number;
  tong_so_tran: number;
  tong_so_set_thang: number;
  tong_so_set_thua: number;
}

export const rankingApi = {
  getTeamRankings: async (
    seasonId: string,
    page: number = 1,
    resultsPerPage: number = 20,
    roundId?: string,
    groupId?: string
  ): Promise<ApiResponse<TeamRanking>> => {
    const params = {
      mua_giai_id: seasonId,
      page,
      results_per_page: resultsPerPage,
      ...(roundId && { vong_dau_id: roundId }),
      ...(groupId && { bang_dau_id: groupId }),
    };

    const response = await fetchApi<TeamRanking>("/xep_hang_doi_bong", params);

    if ("objects" in response) {
      return response as ApiResponse<TeamRanking>;
    }

    return {
      objects: [response as TeamRanking],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },

  getAthleteRankings: async (
    seasonId: string,
    page: number = 1,
    resultsPerPage: number = 20,
    roundId?: string,
    groupId?: string
  ): Promise<ApiResponse<AthleteRanking>> => {
    const params = {
      mua_giai_id: seasonId,
      page,
      results_per_page: resultsPerPage,
      ...(roundId && { vong_dau_id: roundId }),
      ...(groupId && { bang_dau_id: groupId }),
    };

    const response = await fetchApi<AthleteRanking>(
      "/xep_hang_van_dong_vien",
      params
    );

    if ("objects" in response) {
      return response as ApiResponse<AthleteRanking>;
    }

    return {
      objects: [response as AthleteRanking],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};
