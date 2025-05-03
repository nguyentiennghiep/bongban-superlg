"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Post, postApi } from "@/services";

export default function NewsEvents() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await postApi.getPosts(1, 4, "");
        setPosts(data.objects || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Không thể tải tin tức. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Format date from timestamp
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8 text-black">
        Tin tức & sự kiện
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="relative h-[250px] sm:h-[400px] rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="block bg-[#F3F3F3] rounded-lg overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-red-500 text-sm sm:text-base">{error}</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-sm sm:text-base">
            Không có thông tin về tin tức và sự kiện
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured post */}
          {posts.length > 0 && (
            <Link href={`/news/${posts[0].id}`} className="space-y-4 block">
              <div className="relative h-[250px] sm:h-[400px] rounded-lg overflow-hidden group">
                {posts[0].image_thumbnail ? (
                  <Image
                    src={`https://admin.hanoispl.com/static${posts[0].image_thumbnail}`}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Không có hình ảnh</span>
                  </div>
                )}
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6">
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#FF1654] transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-gray-600 mb-2 line-clamp-2">
                  {posts[0].description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{posts[0].tac_gia}</span>
                  <span>{formatDate(posts[0].approved_time)}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Other posts */}
          <div className="space-y-4">
            {posts.slice(1, 4).map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.id}`}
                className="block bg-[#F3F3F3] rounded-lg overflow-hidden hover:bg-gray-100 transition-colors"
              >
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold mb-2 text-black group-hover:text-[#FF1654] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-2 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.tac_gia}</span>
                    <span>{formatDate(post.approved_time)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
