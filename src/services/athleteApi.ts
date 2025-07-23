import { fetchApi, BASE_URL } from "./common";

export interface Athlete {
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
  nam_sinh: string;
  quoc_tich_id: string;
  quoc_tich_ten: string;
  so_cccd: string | null;
  so_dien_thoai: string | null;
  stt: number;
}

export interface AthleteDetail {
  id: string;
  ma_vdv: string;
  ten_vdv: string;
  ten_tieng_anh: string | null;
  thongtin_timkiem: string;
  nam_sinh: string;
  quoc_tich_id: string;
  quoc_tich_ten: string;
  so_cccd: string | null;
  so_dien_thoai: string | null;
  avatar_url: string | null;
  hang_vdv: string;
  diem_vdv: number;
  diem_tich_luy: number;
  doi_bong_id: string;
  doi_bong_ten: string;
  mua_giai_tham_gia: Array<{
    mua_giai_id: string;
    mua_giai_ten: string;
    diem_tham_gia: number;
    diem_tich_luy: number;
    hang_vdv: string;
    ghi_chu?: string;
    diem_tien_trinh?: number;
    trang_thai_thi_dau: number;
  }>;
}

export interface AthleteMatchHistory {
  tran_dau_id: string;
  doi_a_ten: string;
  doi_b_ten: string;
  gio_thi_dau: string;
  ngay_thi_dau: number;
  doi_a_bo_cuoc: boolean | null;
  doi_b_bo_cuoc: boolean | null;
  ket_qua_tran_dau: string;
  tiso_setdau: string;
  tongdiem_toanbo_setdau: string;
  doi_chien_thang_tran_dau: string;
  trandauthamgia: Array<{
    tran_dau_id: string;
    tran_so: number;
    loai_dau: number;
    doi_tham_gia: string;
    diem_truoc_tran: number;
    diem_sau_tran: number;
    ket_qua_chitiet: Array<{
      a: number;
      b: number;
    }>;
    doi_chien_thang: string;
    ket_qua: string;
    dong_doi: string | null;
    doi_thu: string[];
  }>;
}

export interface AthleteMatchHistoryResponse {
  tong_quan: {
    vdv_ten: string;
    vdv_hang: string;
    diem_tich_luy: number;
    so_tran_thang: number;
    so_tran_thua: number;
    tong_so_tran: number;
  };
  lich_su: AthleteMatchHistory[];
  total: number;
  total_pages: number;
  page: number;
  results_per_page: number;
}

export const athleteApi = {
  getAthletes: async (
    page: number = 1,
    resultsPerPage: number = 20,
    search?: string,
    rank?: string,
    teamId?: string,
    seasonId?: string
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      results_per_page: resultsPerPage.toString(),
      ...(search && { text: search }),
      ...(rank && { rank }),
      ...(teamId && { doi_bong_id: teamId }),
      ...(seasonId && { mua_giai_id: seasonId }),
    });

    const response = await fetch(
      `${BASE_URL}/get_athlete_of_team?${params.toString()}`
    );
    return response.json();
  },
  getAthleteDetail: async (id: string): Promise<AthleteDetail> => {
    const response = await fetchApi<AthleteDetail>(
      `/get_detail_athlete?id=${id}`
    );
    return response as AthleteDetail;
  },
  getAthleteMatchHistory: async (
    mua_giai_id: string,
    vdv_id: string,
    page: number = 1,
    resultsPerPage: number = 20
  ): Promise<AthleteMatchHistoryResponse> => {
    const response = await fetch(
      `${BASE_URL}/lich_su_van_dong_vien?mua_giai_id=${mua_giai_id}&vdv_id=${vdv_id}&page=${page}&results_per_page=${resultsPerPage}`
    );
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    return response.json();
  },
};
