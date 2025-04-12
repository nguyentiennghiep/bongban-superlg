"use client";

import { useState, useEffect } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch news data from API
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
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
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-xl sm:text-[24px] font-[600] text-black text-center mb-6 sm:mb-8">
          Tin tức & sự kiện
        </h1>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">
              Chưa có tin tức và sự kiện
            </p>
            <p className="text-gray-400 text-sm">Vui lòng quay lại sau</p>
          </div>
        </div>
      </div>
    </main>
  );
}
