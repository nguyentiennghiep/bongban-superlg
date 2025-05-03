import { fetchApi } from "./common";

export interface Team {
  id: string;
  ma_doi: string;
  ten_doi: string;
  ten_tieng_anh: string | null;
  thongtin_timkiem: string;
  doi_truong_id: string;
  doi_truong_ten: string;
  doi_truong_sdt: string;
  doi_pho_id: string | null;
  doi_pho_ten: string | null;
  doi_pho_sdt: string | null;
  huan_luyen_vien: string | null;
  logo_url: string | null;
  banner_url: string | null;
  mo_ta: string | null;
  soluong_thanhvien: number;
  soluong_vdv: number;
  dia_chi: string;
  dia_chi_map: string | null;
  stt: number;
}

export interface TeamMember {
  id: string;
  doi_bong_id: string;
  doi_bong_ten: string;
  thanhvien_id: string;
  thanhvien_ten: string;
  thanhvien_avatar_url: string;
  stt: number;
  vdv_id: string;
  vdv_hang: string;
  vdv_diem: number;
  diem_tich_luy: number;
}

export const teamApi = {
  getTeams: async (
    page?: number,
    resultsPerPage?: number,
    searchText?: string,
    id?: string
  ) => {
    if (id || page !== undefined) {
      const params: {
        page?: number;
        results_per_page?: number;
        text?: string;
        id?: string;
      } = {};

      if (page !== undefined) params.page = page;
      if (resultsPerPage !== undefined)
        params.results_per_page = resultsPerPage;
      if (searchText) params.text = searchText;
      if (id) params.id = id;

      return fetchApi<Team>("/get_team_list", params);
    }

    const firstPage = await fetchApi<Team>("/get_team_list", {
      page: 1,
      results_per_page: 25,
    });

    if (!("total_pages" in firstPage)) {
      return firstPage;
    }

    const totalPages = firstPage.total_pages;
    const allTeams: Team[] = [...firstPage.objects];

    for (let i = 2; i <= totalPages; i++) {
      const nextPage = await fetchApi<Team>("/get_team_list", {
        page: i,
        results_per_page: 25,
      });

      if ("objects" in nextPage) {
        allTeams.push(...nextPage.objects);
      }
    }

    return {
      objects: allTeams,
      num_results: allTeams.length,
      page: 1,
      total_pages: 1,
    };
  },
  getTeamMembers: (
    teamId: string,
    page: number = 1,
    resultsPerPage: number = 20,
    searchText?: string
  ) => {
    return fetchApi<TeamMember>("/get_mem_of_team", {
      id: teamId,
      page,
      results_per_page: resultsPerPage,
      ...(searchText && { text: searchText }),
    });
  },
};
