export const BASE_URL = "https://admin.hanoispl.com/public/api";

export interface ApiResponse<T> {
  objects: T[];
  num_results: number;
  page: number;
  total_pages: number;
}

export async function fetchApi<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>
): Promise<T | ApiResponse<T>> {
  const queryString = params
    ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
    : "";
  const response = await fetch(`${BASE_URL}${endpoint}${queryString}`);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return response.json();
}
