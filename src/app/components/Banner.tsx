import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[440px]">
      <Image
        src="/background-top.jpg"
        alt="Banner Bóng Bàn"
        fill
        className="object-contain"
        priority
        quality={100}
      />
      {/* Tham Gia Button */}
      {/* <button className="absolute left-1/2 -translate-x-1/2 -bottom-[66px] w-[100px] h-[100px] sm:w-[144px] sm:h-[144px] rounded-full bg-[#EE344D] border-4 sm:border-6 border-[#FFF5F5] text-white font-semibold text-[20px] sm:text-[30px] leading-[24px] sm:leading-[38px] text-center flex items-center justify-center hover:bg-[#d62e43] transition-colors">
        THAM GIA
      </button> */}
    </div>
  );
}
