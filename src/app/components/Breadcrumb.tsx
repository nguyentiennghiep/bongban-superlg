"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

function isUUID(str: string) {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
    str
  );
}

export default function Breadcrumb({ postTitle }: { postTitle?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const getBreadcrumbName = (segment: string, isLast: boolean) => {
    if (isLast && postTitle && isUUID(segment)) {
      return postTitle;
    }
    switch (segment) {
      case "schedule-ranking":
        return "Lịch thi đấu và Bảng xếp hạng";
      case "players-teams":
        return "Đội bóng và Vận động viên";
      case "news":
        return "Tin Tức";
      case "executive-board":
        return "Ban điều hành";
      case "about":
        return "Giới thiệu";
      case "contact":
        return "Liên hệ";
      default:
        return segment;
    }
  };

  return (
    <nav className="flex items-center space-x-2 text-sm mb-4">
      <Link href="/" className="text-gray-500 hover:text-[#EE344D]">
        Trang chủ
      </Link>
      {segments.map((segment, index) => (
        <div key={segment} className="flex items-center space-x-2">
          <ChevronRight size={16} className="text-gray-500" />
          {index === segments.length - 1 ? (
            <span className="text-[#EE344D]">
              {getBreadcrumbName(segment, true)}
            </span>
          ) : (
            <Link
              href={`/${segments.slice(0, index + 1).join("/")}`}
              className="text-gray-500 hover:text-[#EE344D]"
            >
              {getBreadcrumbName(segment, false)}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
