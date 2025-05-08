import { fetchApi } from "./common";

export interface TeamMatchDetail {
  id: string;
  ma_trandau: string;
  vong_dau_ten: string;
  mua_giai_ten: string;
  bang_dau_ten: string;
  doi_a_ten: string;
  doi_b_ten: string;
  ngay_thi_dau: number;
  gio_thi_dau: string;
  san_thi_dau: string;
  diachi_thi_dau: string;
  map_san_dau: string;
  diem_doi_a: number;
  diem_doi_b: number;
  doi_chien_thang: number;
  ket_qua: string;
  tiso_setdau: string;
  tongdiem_toanbo_setdau: string;
  ket_qua_tran_con: Array<{
    tran_so: number;
    loai_dau: number;
    vdv_a1_ten: string;
    vdv_a1_hang: string;
    vdv_a1_diem: number;
    vdv_a2_ten: string | null;
    vdv_a2_hang: string | null;
    vdv_a2_diem: number;
    vdv_b1_ten: string;
    vdv_b1_hang: string;
    vdv_b1_diem: number;
    vdv_b2_ten: string | null;
    vdv_b2_hang: string | null;
    vdv_b2_diem: number;
    ket_qua_chitiet: Array<{
      a: number;
      b: number;
    }>;
    doi_chien_thang: string;
    diem_doi_a: number;
    diem_doi_b: number;
  }>;
}

export const matchDetailApi = {
  getMatchDetail: async (matchId: string): Promise<TeamMatchDetail> => {
    const response = await fetchApi<TeamMatchDetail>(
      "/get_ket_qua_chi_tiet_tran_dau",
      { id: matchId }
    );

    if ("objects" in response) {
      return response.objects[0];
    }

    return response as TeamMatchDetail;
  },
};
