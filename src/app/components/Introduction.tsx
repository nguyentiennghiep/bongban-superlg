import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4">
            Giải Bóng Bàn Hà Nội Super League
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Hanoi Super League (Hanoi SPL) là sân chơi bóng bàn minh bạch, công
            bằng dành cho cộng đồng vận động viên phong trào tại Thủ đô Hà Nội.
            Giải đấu được xây dựng dựa trên triết lý cốt lõi: &ldquo;Đoàn kết -
            Công bằng - Phát triển&rdquo;.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Với hệ thống phân hạng khoa học, thể thức thi đấu chuyên nghiệp và
            giải thưởng hấp dẫn, Hanoi SPL cam kết mang đến môi trường thi đấu
            chất lượng cao cho tất cả người chơi.
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Xem thêm về chúng tôi →
          </Link>
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
