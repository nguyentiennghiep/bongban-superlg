interface TeamMembersPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function TeamMembersPagination({
  currentPage,
  totalPages,
  onPageChange,
}: TeamMembersPaginationProps) {
  return (
    <div className="flex justify-center sm:justify-end items-center gap-2 mb-6">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ${
            currentPage === page
              ? "bg-[#EE344D] text-white"
              : "hover:bg-gray-100 text-black"
          } text-sm sm:text-base`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
