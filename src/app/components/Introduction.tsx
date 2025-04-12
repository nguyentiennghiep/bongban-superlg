import Image from "next/image";

export default function Introduction() {
  return (
    <section className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4">
            Giới thiệu về chúng tôi
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Câu lạc bộ bóng bàn HANOI SUPERLEAGUE là nơi giao lưu, rèn luyện và
            phát triển kỹ năng bóng bàn dành cho mọi lứa tuổi và trình độ. Với
            môi trường năng động, trang thiết bị hiện đại và đội ngũ huấn luyện
            viên giàu kinh nghiệm.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            CLB không chỉ giúp nâng cao kỹ thuật mà còn tạo cơ hội kết nối cộng
            đồng đam mê môn thể thao này. Hãy tham gia cùng chúng tôi để cùng
            rèn luyện sức khỏe và chinh phục những thử thách mới!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/intro-1.jpg"
              alt="Người chơi bóng bàn"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/intro-2.jpg"
              alt="Thiết bị bóng bàn"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
