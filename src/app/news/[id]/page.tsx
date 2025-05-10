"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, postApi } from "@/services";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setLoading(true);
        const postData = await postApi.getPostById(resolvedParams.id);
        setPost(postData);

        // Fetch related posts
        const relatedData = await postApi.getPosts(1, 3, "");
        setRelatedPosts(
          relatedData.objects
            .filter((p) => p.id !== resolvedParams.id)
            .slice(0, 3)
        );
      } catch (err) {
        console.error("Error fetching post details:", err);
        setError("Không thể tải thông tin bài viết. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [resolvedParams.id]);

  // Format date from timestamp
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumb postTitle={post ? post.title : undefined} />
        {loading ? (
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative h-[250px] sm:h-[400px]">
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-red-500 text-sm sm:text-base">{error}</p>
            <Link
              href="/news"
              className="mt-4 inline-block text-[#EE344D] hover:underline"
            >
              Quay lại danh sách tin tức
            </Link>
          </div>
        ) : post ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
              {post.title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main News Content */}
              <div className="lg:col-span-2">
                <article className="mb-8 sm:mb-12">
                  <div className="mb-3">
                    <span className="text-[#666666] text-[11px] sm:text-[12px]">
                      Đăng vào lúc {formatDate(post.approved_time)}
                    </span>
                  </div>
                  {post.image_thumbnail && (
                    <div className="mb-4">
                      <div className="relative h-[250px] sm:h-[350px] md:h-[400px]">
                        <Image
                          src={`https://admin.hanoispl.com/static${post.image_thumbnail}`}
                          alt={post.title}
                          fill
                          className="w-full rounded-lg object-fit"
                          priority
                        />
                      </div>
                    </div>
                  )}
                  <div
                    className="text-sm sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#333333] mb-4 font-roboto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                    <span>{post.tac_gia}</span>
                    <span>{formatDate(post.approved_time)}</span>
                  </div>
                </article>
              </div>

              {/* Featured News Sidebar */}
              <div>
                <h2 className="text-lg sm:text-[20px] font-[600] mb-4 sm:mb-6 text-black font-roboto">
                  Tin nổi bật khác
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      {relatedPost.image_thumbnail && (
                        <div className="mb-3">
                          <div className="relative h-[150px] sm:h-[200px]">
                            <Image
                              src={`https://admin.hanoispl.com/static${relatedPost.image_thumbnail}`}
                              alt={relatedPost.title}
                              fill
                              className="w-full rounded-lg object-fit"
                            />
                          </div>
                        </div>
                      )}
                      <div className="mb-2">
                        <span className="text-[#666666] text-[11px] sm:text-[12px]">
                          Đăng vào lúc {formatDate(relatedPost.approved_time)}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-[16px] font-[600] group-hover:text-[#EE344D] font-roboto">
                        <Link
                          href={`/news/${relatedPost.id}`}
                          className="text-black"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <div className="mt-2">
                        <p className="text-xs sm:text-[14px] text-[#666666] font-roboto">
                          {relatedPost.description}
                        </p>
                      </div>
                      <div className="mt-2">
                        <Link
                          href={`/news/${relatedPost.id}`}
                          className="text-[#EE344D] text-xs sm:text-[14px] hover:underline font-roboto"
                        >
                          Xem thêm
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-sm sm:text-base">
              Không tìm thấy bài viết
            </p>
            <Link
              href="/news"
              className="mt-4 inline-block text-[#EE344D] hover:underline"
            >
              Quay lại danh sách tin tức
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
