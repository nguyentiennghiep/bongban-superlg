export default function NewsEvents() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8 text-black">
        Tin tức & sự kiện
      </h2>

      {/* Comment out skeleton loading */}
      {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
      </div>*/}

      {/* No news message */}
      <div className="text-center py-8 sm:py-12">
        <p className="text-gray-500 text-sm sm:text-base">
          Không có thông tin về tin tức và sự kiện
        </p>
      </div>
    </section>
  );
}
