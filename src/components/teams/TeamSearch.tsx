interface TeamSearchProps {
  onSearch: (query: string) => void;
}

export default function TeamSearch({ onSearch }: TeamSearchProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <label className="block mb-2 font-roboto font-[600] text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
        Tên đội
      </label>
      <input
        type="text"
        placeholder="Nhập tên đội để tìm kiếm"
        className="w-full p-[6px] border border-[#DFDFDF] rounded-sm bg-[#F3F3F3] placeholder-black text-black text-sm leading-[22px]"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
