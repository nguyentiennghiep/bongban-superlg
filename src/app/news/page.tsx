"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, postApi } from "@/services/api";

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const postsPerPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await postApi.getPosts(
          currentPage,
          postsPerPage,
          searchText
        );
        setPosts(data.objects || []);
        setTotalPages(Math.ceil(data.num_results / postsPerPage));
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Không thể tải tin tức. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, searchText]);

  // Format date from timestamp
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchText(searchInput);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl sm:text-[24px] font-[600] text-black text-center mb-6 sm:mb-8">
          Tin tức & sự kiện
        </h1>

        {/* Search Form */}
        <div className="mb-8">
          <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Tìm kiếm tin tức..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1654] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF1654] text-white px-4 py-1 rounded-md hover:bg-[#d41447] transition-colors"
              >
                Tìm
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-[200px]">
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-red-500 text-sm sm:text-base">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-4">
                Không tìm thấy tin tức phù hợp
              </p>
              <p className="text-gray-400 text-sm">
                Vui lòng thử lại với từ khóa khác
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-[200px]">
                    {post.image_thumbnail ? (
                      <Image
                        src={post.image_thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Không có hình ảnh</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-2">
                      <span className="text-[#666666] text-[11px] sm:text-[12px]">
                        {formatDate(post.approved_time)}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 text-black group-hover:text-[#FF1654] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.tac_gia}</span>
                      <span className="text-[#FF1654] group-hover:underline">
                        Xem thêm
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-md ${
                          currentPage === page
                            ? "bg-[#FF1654] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
