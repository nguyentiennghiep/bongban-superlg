"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Introduction Section */}
        <div className="mb-16">
          <h1 className="text-[24px] font-[600] text-black mb-4">
            Giới thiệu về chúng tôi
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Câu lạc bộ bóng bàn HANOI SUPERLEAGUE là nơi giao lưu, rèn luyện
                và phát triển kỹ năng bóng bàn dành cho mọi lứa tuổi và trình
                độ. Với môi trường năng động, trang thiết bị hiện đại và đội ngũ
                huấn luyện viên giàu kinh nghiệm.
              </p>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                CLB không chỉ giúp nâng cao kỹ thuật mà còn tạo cơ hội kết nối
                cộng đồng đam mê môn thể thao này. Hãy tham gia cùng chúng tôi
                để cùng rèn luyện sức khỏe và cùng phục mệnh thể thao nước nhà!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/images/about.jpg"
                alt="Giới thiệu"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src="/images/about.jpg"
                alt="Giới thiệu"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src="/images/about.jpg"
                alt="Giới thiệu"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black text-center mb-4">
            Cam kết phát triển cộng đồng bóng bàn
          </h2>
          <p className="text-[14px] leading-[22px] text-[#333333] text-center mb-8 max-w-[800px] mx-auto">
            Câu lạc bộ bóng bàn Hà Nội SPL không chỉ là nơi thi đấu huyền bỹ mà
            còn là một cộng đồng với những người có chung niềm đam mê. Chúng tôi
            cam kết tạo ra một môi trường chuyên nghiệp, thân thiện, nơi mọi
            thành viên có thể học hỏi, thi đấu và phát triển. Thông qua các buổi
            tập luyện giàu tính kỹ thuật theo phương pháp của CLB hướng đến việc
            tạo nên một thế hệ mới thực sự đẳng cấp và kế thừa.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/about.jpg"
                alt="Cam kết"
                width={400}
                height={300}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Chúng tôi cam kết tạo ra một môi trường chuyên nghiệp, thân
                thiện và có tính giáo dục, giúp mỗi thành viên không chỉ nâng
                cao thể chất mà còn rèn luyện tinh thần thể thao.
              </p>
            </div>
            <div>
              <Image
                src="/images/about.jpg"
                alt="Cam kết"
                width={400}
                height={300}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Thông qua các hoạt động đào tạo, thi đấu và giao lưu, CLB mang
                đến cho các thành viên cơ hội được trau dồi và phát triển phong
                cách thể thao trong cộng đồng.
              </p>
            </div>
            <div>
              <Image
                src="/images/about.jpg"
                alt="Cam kết"
                width={400}
                height={300}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-[16px] font-[600] text-black mb-2">
                Sứ mệnh chúng tôi
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Hà Nội SPL hướng đến việc xây dựng một cộng đồng đam mê bóng
                bàn, nơi mọi người có thể rèn luyện, phát triển kỹ năng và kết
                nối với nhau.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-[24px] font-[600] text-black text-center mb-8">
            Tại sao chọn chúng tôi
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/icon-1.png"
                  alt="Thiết bị cao cấp"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-[16px] font-[600] text-black mb-2">
                Thiết bị cao cấp
              </h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/icon-2.png"
                  alt="Đào tạo cộng đồng"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-[16px] font-[600] text-black mb-2">
                Đào tạo cộng đồng
              </h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/icon-3.png"
                  alt="Huấn luyện viên chuyên nghiệp"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-[16px] font-[600] text-black mb-2">
                Huấn luyện viên chuyên nghiệp
              </h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/icon-4.png"
                  alt="Học viên nhỏ mọi lứa tuổi"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-[16px] font-[600] text-black mb-2">
                Học viên nhỏ mọi lứa tuổi
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
