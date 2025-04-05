"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/" className="text-black">
            Trang chủ
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">Liên hệ</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-roboto font-[600] text-[38px] leading-[46px] mb-8 text-black">
          Liên hệ với chúng tôi
        </h1>

        <div className="grid grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded border border-[#DFDFDF] font-roboto text-[14px] leading-[22px] focus:outline-none focus:border-[#0EA5E9] text-black placeholder:text-black"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 rounded border border-[#DFDFDF] font-roboto text-[14px] leading-[22px] focus:outline-none focus:border-[#0EA5E9] text-black placeholder:text-black"
                />
              </div>
              <div>
                <textarea
                  placeholder="Nội dung tin nhắn"
                  rows={6}
                  className="w-full px-4 py-3 rounded border border-[#DFDFDF] font-roboto text-[14px] leading-[22px] focus:outline-none focus:border-[#0EA5E9] resize-none text-black placeholder:text-black"
                ></textarea>
              </div>
              <div>
                <button className="bg-[#FF1654] text-white font-roboto text-[14px] leading-[22px] px-8 py-3 rounded hover:bg-[#E6144B] transition-colors">
                  Gửi
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <p className="font-roboto text-[14px] leading-[22px] text-black">
              Nếu bạn yêu thích bóng bàn và muốn tham gia cùng chúng tôi, đừng
              ngần ngại liên hệ để biết thêm thông tin chi tiết. Hãy kết nối với
              CLB Hà Nội SPL ngay hôm nay để cùng rèn luyện, thi đấu và phát
              triển đam mê!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1654] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1 16.1834C17.9584 16.4834 17.775 16.7667 17.5334 17.0334C17.125 17.4834 16.675 17.8084 16.1667 18.0167C15.6667 18.2251 15.125 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.825 17.7251C10.8667 17.3167 9.90835 16.7667 8.95835 16.0751C8.00002 15.3751 7.09169 14.5917 6.22502 13.7251C5.36669 12.8584 4.58335 11.9501 3.88335 11.0001C3.20002 10.0501 2.65002 9.10006 2.25002 8.15839C1.85002 7.20839 1.65002 6.30006 1.65002 5.43339C1.65002 4.86672 1.75002 4.32506 1.95002 3.82506C2.15002 3.31672 2.46669 2.85839 2.90835 2.45006C3.44169 1.92506 4.02502 1.66672 4.64169 1.66672C4.85835 1.66672 5.07502 1.71672 5.27502 1.81672C5.48335 1.91672 5.66669 2.06672 5.81669 2.28339L7.60002 4.83339C7.75002 5.04172 7.85835 5.23339 7.93335 5.41672C8.00835 5.59172 8.05002 5.76672 8.05002 5.92506C8.05002 6.12506 7.99169 6.32506 7.87502 6.51672C7.76669 6.70839 7.60835 6.90839 7.40835 7.10839L6.75835 7.78339C6.66669 7.87506 6.62502 7.98339 6.62502 8.11672C6.62502 8.18339 6.63335 8.24172 6.65002 8.30839C6.67502 8.37506 6.70002 8.42506 6.71669 8.47506C6.88335 8.77506 7.15835 9.15006 7.54169 9.59172C7.93335 10.0334 8.35002 10.4834 8.80002 10.9334C9.25835 11.3834 9.70002 11.8084 10.15 12.2001C10.5917 12.5834 10.9667 12.8501 11.275 13.0167C11.3167 13.0334 11.3667 13.0584 11.425 13.0834C11.4917 13.1084 11.5584 13.1167 11.6334 13.1167C11.775 13.1167 11.8834 13.0667 11.975 12.9751L12.625 12.3334C12.8334 12.1251 13.0334 11.9667 13.225 11.8667C13.4167 11.7501 13.6084 11.6917 13.8167 11.6917C13.975 11.6917 14.1417 11.7251 14.325 11.8001C14.5084 11.8751 14.7 11.9834 14.9084 12.1251L17.5 13.9334C17.7167 14.0834 17.8667 14.2584 17.9584 14.4667C18.0417 14.6751 18.3084 14.8917 18.3084 15.2751Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-roboto font-[600] text-[14px] leading-[22px] text-black mb-1">
                    Hotline
                  </div>
                  <div className="font-roboto text-[14px] leading-[22px] text-black">
                    0987654321
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1654] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M14.1667 17.0834H5.83335C3.33335 17.0834 1.66669 15.8334 1.66669 12.9167V7.08341C1.66669 4.16675 3.33335 2.91675 5.83335 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08341V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-roboto font-[600] text-[14px] leading-[22px] text-black mb-1">
                    Email
                  </div>
                  <div className="font-roboto text-[14px] leading-[22px] text-black">
                    info@hanoispl.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1654] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 11.1917C11.4359 11.1917 12.6 10.0276 12.6 8.59172C12.6 7.15586 11.4359 5.99172 10 5.99172C8.56414 5.99172 7.40001 7.15586 7.40001 8.59172C7.40001 10.0276 8.56414 11.1917 10 11.1917Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.01666 7.07508C4.65832 -0.141583 15.35 -0.133249 16.9833 7.08341C17.9417 11.3167 15.3083 14.9001 13 17.1168C11.325 18.7334 8.67499 18.7334 6.99166 17.1168C4.69166 14.9001 2.05832 11.3084 3.01666 7.07508Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-roboto font-[600] text-[14px] leading-[22px] text-black mb-1">
                    Địa chỉ
                  </div>
                  <div className="font-roboto text-[14px] leading-[22px] text-black">
                    Số 0000 phố Phú Gia, Tây Hồ, Hà Nội
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
