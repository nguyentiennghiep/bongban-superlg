"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-[32px] font-[700] text-black mb-4">
            GIẢI BÓNG BÀN HÀ NỘI SUPER LEAGUE
          </h1>
          <p className="text-[16px] leading-[24px] text-[#333333] max-w-[800px] mx-auto">
            Sân chơi bóng bàn minh bạch, công bằng dành cho cộng đồng vận động
            viên phong trào tại Thủ đô Hà Nội
          </p>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black mb-6">
            Lịch sử hình thành và phát triển
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Giải bóng bàn Hà Nội Super League (Hanoi SPL) ra đời với sứ mệnh
                tạo lập sân chơi bóng bàn minh bạch, công bằng dành cho cộng
                đồng vận động viên phong trào tại Thủ đô Hà Nội. Được khởi xướng
                bởi những người có tâm huyết với phong trào bóng bàn, giải đấu
                đã nhanh chóng trở thành điểm đến thú vị cho các vận động viên
                bóng bàn nghiệp dư mong muốn được thể hiện, cọ xát và nâng cao
                trình độ chuyên môn.
              </p>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Với định hướng phát triển bền vững, Hanoi SPL sẽ không ngừng đổi
                mới, hoàn thiện về thể thức thi đấu, hệ thống tích luỹ điểm,
                phân hạng vận động viên và cơ cấu giải thưởng phù hợp nhằm tạo
                nên một sân chơi hấp dẫn, công bằng và đẳng cấp cho cộng đồng
                bóng bàn phong trào Thủ đô.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/about-1.jpg"
                alt="Lịch sử Hanoi SPL"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>

        {/* Philosophy and Vision Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            Triết lý và tầm nhìn
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-[14px] leading-[22px] text-[#333333] mb-6">
              Hanoi SPL được xây dựng dựa trên triết lý cốt lõi:{" "}
              <span className="font-semibold">
                &ldquo;Đoàn kết - Công bằng - Phát triển&rdquo;
              </span>
              . Chúng tôi tin rằng một giải đấu thể thao thực sự có giá trị khi
              không chỉ là nơi tranh tài, mà còn là điểm hội tụ của những giá
              trị cao đẹp trong thể thao.
            </p>
            <p className="text-[14px] leading-[22px] text-[#333333]">
              Ban điều hành hướng đến xây dựng Hanoi SPL là một trong các giải
              đấu hấp dẫn hàng đầu tại Hà Nội và trở thành hình mẫu cho các giải
              đấu bóng bàn phong trào tại các địa phương khác trên toàn quốc.
              Đồng thời, Chúng tôi kỳ vọng Hanoi SPL sẽ là chiếc nôi ươm mầm cho
              những tài năng bóng bàn, nơi phát hiện và bồi dưỡng những vận động
              viên tiềm năng cho phong trào bóng bàn nước nhà.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            Sứ mệnh
          </h2>
          <p className="text-[14px] leading-[22px] text-[#333333] text-center mb-8 max-w-[800px] mx-auto">
            Hanoi Super League cam kết theo đuổi những sứ mệnh cao cả:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[16px] font-[600] text-black mb-3">
                Phát triển phong trào
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Tạo lập và duy trì sân chơi chuyên nghiệp, thường xuyên cho các
                vận động viên nghiệp dư tại Hà Nội, không phân biệt tuổi tác,
                giới tính, nghề nghiệp.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[16px] font-[600] text-black mb-3">
                Nâng cao chất lượng chuyên môn
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Thiết lập môi trường thi đấu cạnh tranh lành mạnh, giúp các vận
                động viên không ngừng nâng cao trình độ kỹ thuật, chiến thuật và
                tinh thần thể thao.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[16px] font-[600] text-black mb-3">
                Kết nối cộng đồng
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Tạo dựng mạng lưới kết nối rộng khắp giữa những người đam mê
                bóng bàn, từ đó thúc đẩy sự phát triển của phong trào bóng bàn
                Thủ đô.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[16px] font-[600] text-black mb-3">
                Truyền cảm hứng
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Lan tỏa niềm đam mê với bộ môn bóng bàn đến đông đảo công chúng,
                đặc biệt là thế hệ trẻ, góp phần xây dựng lối sống lành mạnh và
                tinh thần thể thao trong cộng đồng.
              </p>
            </div>
          </div>
        </div>

        {/* Management Team Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            Ban điều hành giải
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-[14px] leading-[22px] text-[#333333] text-center">
              Hanoi Super League được điều hành bởi tập thể những cá nhân có
              chuyên môn, kinh nghiệm phong phú và tâm huyết với phong trào bóng
              bàn.
            </p>
          </div>
        </div>

        {/* Highlights Section with Image */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            ĐIỂM NỔI BẬT CỦA GIẢI ĐẤU
          </h2>
          <div className="mb-8">
            <Image
              src="/images/about-2.jpg"
              alt="Điểm nổi bật của giải đấu"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover mx-auto"
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-3">
                1. Hệ thống phân hạng khoa học và công bằng
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Hanoi Super League tự hào với hệ thống phân hạng vận động viên
                khoa học, dựa trên thực lực và kết quả thi đấu. Vận động viên
                được phân thành 12 hạng từ C1 đến H2, với điểm số cụ thể cho
                từng hạng.
              </p>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Hệ thống này đảm bảo sự công bằng trong thi đấu và tạo động lực
                để các vận động viên không ngừng nỗ lực nâng cao trình độ để
                thăng hạng.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-3">
                2. Thể thức thi đấu chuyên nghiệp và hấp dẫn
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Giải đấu được tổ chức với thể thức thi đấu đa dạng, gồm:
              </p>
              <ul className="list-disc pl-5 text-[14px] leading-[22px] text-[#333333]">
                <li className="mb-2">
                  Vòng bảng: Các đội được chia thành các bảng đấu, thi đấu vòng
                  tròn (một hoặc 2 lượt đi/về tuỳ theo số lượng đội tham dự) để
                  xác định thứ hạng.
                </li>
                <li className="mb-2">
                  Vòng loại trực tiếp: Các đội xuất sắc nhất từ mỗi bảng sẽ tiến
                  vào vòng đấu loại trực tiếp, bao gồm các trận Tứ kết, Bán kết
                  và Chung kết. Vòng trực tiếp sẽ được tổ chức thi đấu tại sân
                  tập trung, tạo nên bầu không khí tưng bừng, quyết liệt với sự
                  tham gia cùng lúc của nhiều đội bóng và hàng trăm cổ động
                  viên.
                </li>
                <li>
                  Phân nhóm trình độ: Dựa trên kết quả vòng bảng, các đội được
                  phân chia thành Super League I và Super League II, tạo cơ hội
                  cạnh tranh công bằng cho mọi đội tham dự.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-3">
                3. Hệ thống chấp điểm công bằng
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Một trong những điểm nổi bật của Hanoi Super League là hệ thống
                chấp điểm khoa học, dựa trên chênh lệch hạng giữa các vận động
                viên, đảm bảo mọi trận đấu đều có tính cạnh tranh cao, không phụ
                thuộc vào chênh lệch trình độ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-3">
                4. Công nghệ hiện đại
              </h3>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Hanoi Super League ứng dụng công nghệ thông tin hiện đại trong
                quản lý giải đấu thông qua website chính thức
                https://hanoispl.com, nơi cập nhật thường xuyên:
              </p>
              <ul className="list-disc pl-5 text-[14px] leading-[22px] text-[#333333]">
                <li className="mb-2">Kết quả thi đấu và bảng xếp hạng</li>
                <li className="mb-2">Lịch thi đấu và thông báo quan trọng</li>
                <li className="mb-2">
                  Điểm số cá nhân và hạng của từng vận động viên
                </li>
                <li>Hình ảnh, video các trận đấu nổi bật</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Join Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            THAM GIA GIẢI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-4">
                Đối với đội bóng
              </h3>
              <ul className="list-disc pl-5 text-[14px] leading-[22px] text-[#333333]">
                <li className="mb-2">
                  Các đội bóng thuộc các CLB bóng bàn trên địa bàn các
                  quận/huyện thuộc Thành phố Hà Nội.
                </li>
                <li className="mb-2">
                  Mỗi đội cần đăng ký tối thiểu 7, tối đa 10 vận động viên.
                </li>
                <li className="mb-2">
                  Mỗi đội phải có sân nhà đáp ứng tiêu chuẩn kỹ thuật để tổ chức
                  thi đấu.
                </li>
                <li>
                  Đội hình tham gia cần tuân thủ quy định về số lượng vận động
                  viên các hạng theo điều lệ giải.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[18px] font-[600] text-black mb-4">
                Đối với vận động viên
              </h3>
              <ul className="list-disc pl-5 text-[14px] leading-[22px] text-[#333333]">
                <li className="mb-2">
                  Vận động viên nghiệp dư, có trình độ phù hợp với yêu cầu của
                  giải.
                </li>
                <li className="mb-2">
                  Không giới hạn về tuổi tác, giới tính, nghề nghiệp.
                </li>
                <li className="mb-2">
                  Đăng ký chính xác hạng theo trình độ thực tế.
                </li>
                <li>
                  Cam kết tuân thủ điều lệ giải và tinh thần thể thao cao
                  thượng.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prizes Section with Image */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            GIẢI THƯỞNG HẤP DẪN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
                Hanoi Super League tự hào mang đến hệ thống giải thưởng hấp dẫn,
                xứng đáng với nỗ lực và tài năng của các đội tham gia; mức giải
                thưởng dự kiến của từng mùa giải được ghi trong Điều lệ và công
                bố chính thức tại buổi họp chuyên môn giữa Ban điều hành giải và
                Đội trưởng các đội trước ngày giải khởi tranh.
              </p>
              <p className="text-[14px] leading-[22px] text-[#333333]">
                Ngoài ra, Ban điều hành sẽ trao nhiều giải thưởng phụ có giá trị
                cho các vận động viên xuất sắc, đội bóng thi đấu fair-play và
                những phần thưởng đặc biệt từ các nhà tài trợ.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/about-3.jpg"
                alt="Giải thưởng Hanoi SPL"
                width={500}
                height={700}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-[600] text-black mb-6 text-center">
            LỜI KẾT
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-[14px] leading-[22px] text-[#333333] mb-4">
              Hanoi Super League không chỉ đơn thuần là một giải đấu bóng bàn,
              mà còn là nơi hội tụ của niềm đam mê, tài năng và tinh thần thể
              thao cao thượng. Chúng tôi cam kết không ngừng đổi mới, hoàn thiện
              để mang đến một giải đấu chuyên nghiệp, công bằng và hấp dẫn.
            </p>
            <p className="text-[14px] leading-[22px] text-[#333333]">
              Ban điều hành Hanoi Super League trân trọng cảm ơn sự tin tưởng,
              đồng hành của các đội bóng, vận động viên và những người yêu mến
              môn bóng bàn. Chúng tôi tin rằng, với sự chung tay góp sức của tất
              cả, Hanoi Super League sẽ ngày càng phát triển, trở thành giải đấu
              bóng bàn phong trào uy tín và chất lượng hàng đầu tại Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
