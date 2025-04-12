const BASE_URL = "https://admin.hanoispl.com/public/api";

interface ApiResponse<T> {
  objects: T[];
  num_results: number;
  page: number;
  total_pages: number;
}

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
  }>;
}

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

const fetchApi = async <T>(
  endpoint: string,
  params: Record<string, string | number> = {}
): Promise<ApiResponse<T> | T> => {
  const queryString = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
};

export const teamApi = {
  getTeams: async (
    page?: number,
    resultsPerPage?: number,
    searchText?: string,
    id?: string
  ) => {
    // Nếu có id hoặc page được chỉ định, chỉ lấy một trang
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

    // Nếu không có tham số, lấy tất cả dữ liệu
    const firstPage = await fetchApi<Team>("/get_team_list", {
      page: 1,
      results_per_page: 25,
    });

    if (!("total_pages" in firstPage)) {
      return firstPage;
    }

    const totalPages = firstPage.total_pages;
    const allTeams: Team[] = [...firstPage.objects];

    // Lấy các trang còn lại
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
};

export const roundApi = {
  getRounds: async (
    page: number = 1,
    resultsPerPage: number = 20
  ): Promise<ApiResponse<Round>> => {
    const response = await fetchApi<Round>("/get_round", {
      page,
      results_per_page: resultsPerPage,
    });

    // Ensure we return an ApiResponse<Round>
    if ("objects" in response) {
      return response as ApiResponse<Round>;
    }

    // If it's not an ApiResponse, create one
    return {
      objects: [response as Round],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },
};

// Add more API services here as needed
