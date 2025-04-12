import Link from "next/link";

interface TeamBreadcrumbProps {
  teamName: string;
}

export default function TeamBreadcrumb({ teamName }: TeamBreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
      <Link href="/" className="text-black">
        Trang chủ
      </Link>
      <span className="text-black">/</span>
      <Link href="/players-teams" className="text-black">
        Đội và vận động viên
      </Link>
      <span className="text-black">/</span>
      <span className="text-black">{teamName}</span>
    </div>
  );
}
