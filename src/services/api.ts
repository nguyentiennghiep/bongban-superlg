const BASE_URL = "https://hanoispl.com/public/api";

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
  doi_truong_ten: string;
  doi_truong_sdt: string;
  doi_pho_ten: string;
  doi_pho_sdt: string;
  dia_chi: string;
  stt: number;
}

export interface Athlete {
  id: string;
  ma_vdv: string;
  ten_vdv: string;
  ten_tieng_anh: string | null;
  nam_sinh: string;
  quoc_tich_ten: string;
  avatar_url: string | null;
  hang_vdv: string | null;
  diem_vdv: number | null;
  doi_bong_id: string;
  doi_bong_ten: string;
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
  doi_bong_id: string;
  doi_bong_ten: string;
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
  getTeams: (
    page: number = 1,
    resultsPerPage: number = 20,
    searchText?: string,
    id?: string
  ) => {
    return fetchApi<Team>("/get_team_list", {
      page,
      results_per_page: resultsPerPage,
      ...(searchText && { text: searchText }),
      ...(id && { id }),
    });
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
  getAthletes: (
    page: number = 1,
    resultsPerPage: number = 20,
    searchText?: string,
    rank?: string
  ) => {
    return fetchApi<Athlete>("/get_athlete_of_team", {
      page,
      results_per_page: resultsPerPage,
      ...(searchText && { text: searchText }),
      ...(rank && { rank }),
    });
  },
  getAthleteDetail: async (id: string): Promise<AthleteDetail> => {
    const response = await fetchApi<AthleteDetail>(
      `/get_detail_athlete?id=${id}`
    );
    return response as AthleteDetail;
  },
};

// Add more API services here as needed
