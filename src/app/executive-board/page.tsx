"use client";

import Breadcrumb from "@/app/components/Breadcrumb";

interface BoardMemberProps {
  title: string;
  bgColor: string;
}

const BoardMember = ({ title, bgColor }: BoardMemberProps) => {
  return (
    <div
      className={`${bgColor} rounded-lg p-2 sm:p-4 flex items-center justify-center min-w-[140px] sm:min-w-[200px]`}
    >
      <div className="text-center">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4"
          >
            <path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="text-black text-xs sm:text-sm font-medium">{title}</p>
      </div>
    </div>
  );
};

export default function ExecutiveBoardPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumb />

        <h1 className="text-center font-roboto font-[600] text-2xl sm:text-[38px] leading-[32px] sm:leading-[46px] mb-4 sm:mb-6 text-black">
          Ban điều hành
        </h1>

        <div className="flex flex-col items-center">
          {/* Ban điều hành giải */}
          <div className="mb-4 sm:mb-8">
            <BoardMember title="BAN ĐIỀU HÀNH GIẢI" bgColor="bg-[#FF3B57]" />
          </div>

          {/* Main departments */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 mb-4 sm:mb-8 w-full max-w-4xl">
            <BoardMember
              title="Ban cơ sở vật chất & tham mưu"
              bgColor="bg-[#8B5CF6]"
            />
            <BoardMember title="Ban vận động tài trợ" bgColor="bg-[#F97316]" />
            <BoardMember title="Ban kỹ thuật" bgColor="bg-[#84CC16]" />
            <BoardMember
              title="Ban tài chính & Công nghệ"
              bgColor="bg-[#0EA5E9]"
            />
          </div>

          {/* Sub departments */}
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8">
              {/* Empty column for first department */}
              <div className="hidden sm:block"></div>

              {/* Tài trợ column */}
              <div className="space-y-2 sm:space-y-4">
                <BoardMember title="Tài trợ" bgColor="bg-[#F97316]" />
                <BoardMember title="Truyền thông" bgColor="bg-[#F97316]" />
                <BoardMember title="Đối ngoại" bgColor="bg-[#F97316]" />
                <BoardMember
                  title="Xây dựng phong trào"
                  bgColor="bg-[#F97316]"
                />
              </div>

              {/* Kỹ thuật column */}
              <div className="space-y-2 sm:space-y-4">
                <BoardMember title="Điều lệ các giải" bgColor="bg-[#84CC16]" />
                <BoardMember title="Xét hạng VĐV" bgColor="bg-[#84CC16]" />
                <BoardMember title="Trọng tài" bgColor="bg-[#84CC16]" />
                <BoardMember title="Update điểm" bgColor="bg-[#84CC16]" />
                <BoardMember title="Giám sát thi đấu" bgColor="bg-[#84CC16]" />
              </div>

              {/* Tài chính & Công nghệ column */}
              <div className="space-y-2 sm:space-y-4">
                <BoardMember
                  title="IT (Web, PM tinh điểm)"
                  bgColor="bg-[#0EA5E9]"
                />
                <BoardMember title="Thu - Chi" bgColor="bg-[#0EA5E9]" />
                <BoardMember title="Giải thưởng" bgColor="bg-[#0EA5E9]" />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-12 h-0 border-t-2 border-black"></div>
              <span className="text-xs sm:text-sm">
                Quản lý, điều hành trực tiếp
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-12 h-0 border-t-2 border-dashed border-gray-400"></div>
              <span className="text-xs sm:text-sm">Gián tiếp, phối hợp</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
