import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
      <Link href="/" className="text-black">
        Trang chủ
      </Link>
      <span className="text-black">/</span>
      <span className="text-black">Lịch thi đấu</span>
    </div>
  );
}
