import { useState } from "react";

interface MatchDetail {
  tran_dau_id: string;
  tran_so: number;
  loai_dau: number;
  doi_tham_gia: string;
  diem_truoc_tran: number;
  diem_sau_tran: number;
  ket_qua_chitiet: Array<{ a: number; b: number }>;
  doi_chien_thang: string;
  ket_qua: string;
  dong_doi: string | null;
  doi_thu: string[];
}

interface MatchDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchDetails: MatchDetail[];
  doi_a_ten: string;
  doi_b_ten: string;
}

export default function MatchDetailModal({
  isOpen,
  onClose,
  matchDetails,
  doi_a_ten,
  doi_b_ten,
}: MatchDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="bg-[#EE344D] rounded-xl px-3 sm:px-4 py-2">
            <h2 className="text-white font-semibold text-lg sm:text-xl">
              Chi tiết trận đấu
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {matchDetails.map((detail, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-[#F3F3F3]"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                    Trận {detail.tran_so}
                  </span>
                  <span className="bg-[#EE344D] text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
                    {detail.loai_dau === 1 ? "Đấu đơn" : "Đấu đôi"}
                  </span>
                </div>
                <span
                  className={`font-roboto font-[600] text-[14px] sm:text-[16px] ${
                    detail.ket_qua === "Thắng"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {detail.ket_qua}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="bg-white rounded-lg p-2 sm:p-3">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">
                    Điểm trước trận:
                  </p>
                  <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                    {detail.diem_truoc_tran}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2 sm:p-3">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">
                    Điểm sau trận:
                  </p>
                  <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                    {detail.diem_sau_tran}
                  </p>
                </div>
              </div>

              {detail.ket_qua_chitiet.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">
                    Kết quả chi tiết:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {detail.ket_qua_chitiet.map((set, setIndex) => (
                      <div
                        key={setIndex}
                        className="bg-white rounded-lg p-2 sm:p-3 text-center"
                      >
                        <span className="font-roboto font-[600] text-[12px] sm:text-[14px] block mb-1">
                          Set {setIndex + 1}
                        </span>
                        <p className="font-roboto text-[14px] sm:text-[16px]">
                          {set.a}-{set.b}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detail.dong_doi && (
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">
                    Đồng đội:
                  </p>
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <p className="font-roboto font-[600] text-[14px] sm:text-[16px] break-words">
                      {detail.dong_doi}
                    </p>
                  </div>
                </div>
              )}

              {detail.doi_thu.length > 0 && (
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">
                    Đối thủ:
                  </p>
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <ul className="space-y-1">
                      {detail.doi_thu.map((opponent, oppIndex) => (
                        <li
                          key={oppIndex}
                          className="font-roboto text-[14px] sm:text-[16px] break-words"
                        >
                          {opponent}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
