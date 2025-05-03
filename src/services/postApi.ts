import { fetchApi, ApiResponse } from "./common";

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image_thumbnail: string | null;
  tac_gia: string;
  approved_time: number;
}

export const postApi = {
  getPosts: async (
    page: number = 1,
    resultsPerPage: number = 20,
    searchText: string = ""
  ): Promise<ApiResponse<Post>> => {
    const response = await fetchApi<Post>("/get_post_by_category", {
      text: searchText,
      page,
      results_per_page: resultsPerPage,
    });

    if ("objects" in response) {
      return response as ApiResponse<Post>;
    }

    return {
      objects: [response as Post],
      num_results: 1,
      page: 1,
      total_pages: 1,
    };
  },

  getPostById: async (id: string): Promise<Post> => {
    const response = await fetchApi<Post>("/get_detail_post", {
      id,
      page: 1,
      results_per_page: 20,
      text: "",
    });

    if (Array.isArray(response)) {
      return response[0];
    }

    if ("objects" in response && response.objects.length > 0) {
      return response.objects[0];
    }

    return response as Post;
  },
};
