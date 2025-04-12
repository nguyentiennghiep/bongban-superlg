interface TeamMembersSearchProps {
  searchInput: string;
  onSearch: (value: string) => void;
}

export default function TeamMembersSearch({
  searchInput,
  onSearch,
}: TeamMembersSearchProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
        Tìm kiếm thành viên
      </label>
      <input
        type="text"
        placeholder="Nhập tên thành viên để tìm kiếm"
        className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
        value={searchInput}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
