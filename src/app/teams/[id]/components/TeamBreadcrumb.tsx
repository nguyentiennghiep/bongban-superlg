import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface TeamBreadcrumbProps {
  teamName: string;
}

export default function TeamBreadcrumb({ teamName }: TeamBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-4">
      <Link href="/" className="text-gray-500 hover:text-[#EE344D]">
        Trang chủ
      </Link>
      <div className="flex items-center space-x-2">
        <ChevronRight size={16} className="text-gray-500" />
        <Link
          href="/players-teams"
          className="text-gray-500 hover:text-[#EE344D]"
        >
          Đội bóng và Vận động viên
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <ChevronRight size={16} className="text-gray-500" />
        <span className="text-[#EE344D]">{teamName}</span>
      </div>
    </nav>
  );
}
