"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface TeamMatchDetail {
  id: string;
  ma_trandau: string;
  vong_dau_ten: string;
  mua_giai_ten: string;
  bang_dau_ten: string;
  doi_a_ten: string;
  doi_b_ten: string;
  ngay_thi_dau: number;
  gio_thi_dau: string;
  san_thi_dau: string;
  diachi_thi_dau: string;
  map_san_dau: string;
  diem_doi_a: number;
  diem_doi_b: number;
  doi_chien_thang: number;
  ket_qua: string;
  tiso_setdau: string;
  tongdiem_toanbo_setdau: string;
  ket_qua_tran_con: Array<{
    tran_so: number;
    loai_dau: number;
    vdv_a1_ten: string;
    vdv_a1_hang: string;
    vdv_a1_diem: number;
    vdv_a2_ten: string | null;
    vdv_a2_hang: string | null;
    vdv_a2_diem: number;
    vdv_b1_ten: string;
    vdv_b1_hang: string;
    vdv_b1_diem: number;
    vdv_b2_ten: string | null;
    vdv_b2_hang: string | null;
    vdv_b2_diem: number;
    ket_qua_chitiet: Array<{
      a: number;
      b: number;
    }>;
    doi_chien_thang: string;
    diem_doi_a: number;
    diem_doi_b: number;
  }>;
}

interface TeamMatchDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchDetails: TeamMatchDetail | null;
}

export default function TeamMatchDetailModal({
  isOpen,
  onClose,
  matchDetails,
}: TeamMatchDetailModalProps) {
  if (!matchDetails) return null;

  const formatDate = (dateNumber: number) => {
    const dateStr = dateNumber.toString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${day}/${month}/${year}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white p-3 sm:p-6 text-left align-middle shadow-lg transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between mb-3 sm:mb-4"
                >
                  <div className="bg-[#EE344D] rounded-xl px-3 sm:px-4 py-2">
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      Chi tiết trận đấu
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </Dialog.Title>

                <div className="mt-2 space-y-3 sm:space-y-4">
                  {/* Match Info */}
                  <div className="bg-[#F3F3F3] p-3 sm:p-4 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Mã trận đấu
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.ma_trandau}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Mùa giải
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.mua_giai_ten}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Vòng đấu
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.vong_dau_ten}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Bảng đấu
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.bang_dau_ten}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Ngày thi đấu
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {formatDate(matchDetails.ngay_thi_dau)}{" "}
                          {matchDetails.gio_thi_dau}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">
                          Sân thi đấu
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.san_thi_dau}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Match Result */}
                  <div className="bg-[#F3F3F3] p-3 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="text-center flex-1">
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.doi_a_ten}
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-[#EE344D]">
                          {matchDetails.diem_doi_a}
                        </p>
                      </div>
                      <div className="text-center px-2 sm:px-4">
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Kết quả
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.ket_qua}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Tỉ số set
                        </p>
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.tiso_setdau}
                        </p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="font-roboto font-[600] text-[14px] sm:text-[16px]">
                          {matchDetails.doi_b_ten}
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-[#EE344D]">
                          {matchDetails.diem_doi_b}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-[#EE344D] rounded-xl px-3 sm:px-4 py-2">
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        Chi tiết các trận đấu
                      </h4>
                    </div>
                    {/* Desktop Table View */}
                    <div className="hidden sm:block overflow-x-auto px-2 sm:px-4 -mx-3 sm:mx-0">
                      <table className="w-full min-w-[640px]">
                        <thead className="bg-[#F3F3F3]">
                          <tr>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 text-center">
                              Trận
                            </th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 text-center">
                              Loại
                            </th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 max-w-[200px] text-center">
                              Chủ nhà
                            </th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 w-12 text-center"></th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 max-w-[200px] text-center">
                              Khách
                            </th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 text-center">
                              Kết quả
                            </th>
                            <th className="py-2 text-xs sm:text-sm font-medium text-gray-500 text-center">
                              Điểm
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {matchDetails.ket_qua_tran_con.map((match) => {
                            let setA = 0,
                              setB = 0;
                            match.ket_qua_chitiet.forEach((set) => {
                              if (set.a > set.b) setA++;
                              else if (set.b > set.a) setB++;
                            });
                            return (
                              <tr key={match.tran_so} className="bg-white">
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  {match.tran_so}
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  {match.loai_dau === 1 ? "Đơn" : "Đôi"}
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  <div>
                                    <p>
                                      {match.vdv_a1_ten} ({match.vdv_a1_hang})
                                    </p>
                                    {match.vdv_a2_ten && (
                                      <p>
                                        {match.vdv_a2_ten} ({match.vdv_a2_hang})
                                      </p>
                                    )}
                                  </div>
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  <div className="flex justify-center items-center font-bold gap-1">
                                    <span>{setA}</span>
                                    <span>-</span>
                                    <span>{setB}</span>
                                  </div>
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  <div>
                                    <p>
                                      {match.vdv_b1_ten} ({match.vdv_b1_hang})
                                    </p>
                                    {match.vdv_b2_ten && (
                                      <p>
                                        {match.vdv_b2_ten} ({match.vdv_b2_hang})
                                      </p>
                                    )}
                                  </div>
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  {match.ket_qua_chitiet.map((set, index) => (
                                    <p key={index}>
                                      {set.a}-{set.b}
                                    </p>
                                  ))}
                                </td>
                                <td className="py-2 text-xs sm:text-sm text-center">
                                  <div>
                                    <p
                                      className={
                                        match.diem_doi_a > 0
                                          ? "text-green-600"
                                          : "text-red-600"
                                      }
                                    >
                                      {match.diem_doi_a > 0 ? "+" : ""}
                                      {match.diem_doi_a}
                                    </p>
                                    <p
                                      className={
                                        match.diem_doi_b > 0
                                          ? "text-green-600"
                                          : "text-red-600"
                                      }
                                    >
                                      {match.diem_doi_b > 0 ? "+" : ""}
                                      {match.diem_doi_b}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Table View */}
                    <div className="sm:hidden overflow-x-auto px-2 sm:px-4 -mx-3">
                      <table className="w-full min-w-[360px]">
                        <thead className="bg-[#F3F3F3]">
                          <tr>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 text-center">
                              Trận
                            </th>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 text-center">
                              Loại
                            </th>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 max-w-[145px] text-center">
                              Chủ nhà
                            </th>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 w-8 text-center"></th>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 max-w-[145px] text-center">
                              Khách
                            </th>
                            <th className="py-1.5 text-[10px] font-medium text-gray-500 text-center">
                              Kết quả
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {matchDetails.ket_qua_tran_con.map((match) => {
                            let setA = 0,
                              setB = 0;
                            match.ket_qua_chitiet.forEach((set) => {
                              if (set.a > set.b) setA++;
                              else if (set.b > set.a) setB++;
                            });
                            return (
                              <tr key={match.tran_so} className="bg-white">
                                <td className="py-1.5 text-[10px] whitespace-nowrap text-center">
                                  {match.tran_so}
                                </td>
                                <td className="py-1.5 text-[10px] whitespace-nowrap text-center">
                                  {match.loai_dau === 1 ? "Đơn" : "Đôi"}
                                </td>
                                <td className="py-1.5 text-[10px] text-center">
                                  <div className="space-y-0.5">
                                    <p>
                                      {match.vdv_a1_ten} ({match.vdv_a1_hang})
                                    </p>
                                    {match.vdv_a2_ten && (
                                      <p>
                                        {match.vdv_a2_ten} ({match.vdv_a2_hang})
                                      </p>
                                    )}
                                  </div>
                                </td>
                                <td className="py-1.5 text-[10px] text-center">
                                  <div className="flex justify-center items-center font-bold gap-1">
                                    <span>{setA}</span>
                                    <span>-</span>
                                    <span>{setB}</span>
                                  </div>
                                </td>
                                <td className="py-1.5 text-[10px] text-center">
                                  <div className="space-y-0.5">
                                    <p>
                                      {match.vdv_b1_ten} ({match.vdv_b1_hang})
                                    </p>
                                    {match.vdv_b2_ten && (
                                      <p>
                                        {match.vdv_b2_ten} ({match.vdv_b2_hang})
                                      </p>
                                    )}
                                  </div>
                                </td>
                                <td className="py-1.5 text-[10px] text-center">
                                  <div className="space-y-0.5">
                                    {match.ket_qua_chitiet.map((set, index) => (
                                      <p
                                        key={index}
                                        className="whitespace-nowrap"
                                      >
                                        {set.a}-{set.b}
                                      </p>
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
