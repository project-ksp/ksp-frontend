"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import NextLabel from "@/components/icons/NextLabel";
import PreviousLabel from "@/components/icons/PreviousLabel";

const DataMaster = () => {
  const { data: session, status } = useSession();
  const ref = useRef();

  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);

  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const getMembers = async () => {
      if (status === "loading") return null;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members?page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMembers(data.data.members);
        setPageCount(data.data.totalPages);
      } else {
        toast.error(data.message);
      }
    };
    getMembers();
  }, [status, session, page]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  if (status === "loading") return <>Loading...</>;
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-xl font-bold text-black">Data Master</h2>
      <button
        onClick={() => {
          ref.current.contentWindow.print();
        }}
        className="w-1/5 bg-primary h-[48px] flex justify-center items-center text-white rounded-md"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8H5C3.34 8 2 9.34 2 11V15C2 16.1 2.9 17 4 17H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V17H20C21.1 17 22 16.1 22 15V11C22 9.34 20.66 8 19 8ZM15 19H9C8.45 19 8 18.55 8 18V14H16V18C16 18.55 15.55 19 15 19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12ZM17 3H7C6.45 3 6 3.45 6 4V6C6 6.55 6.45 7 7 7H17C17.55 7 18 6.55 18 6V4C18 3.45 17.55 3 17 3Z"
            fill="white"
          />
        </svg>
        <p className="ml-5 text-base font-regular">Cetak Data Master</p>
      </button>
      <div className="bg-white p-[20px] rounded-xl">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6]">
              <th className="w-[8%] font-semibold py-[13px] px-[10px]">
                ID Anggota
              </th>
              <th className="w-[11%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Nama Anggota</p>
                </div>
              </th>
              <th className="w-[13%] font-semibold px-[10px]">NIK</th>
              <th className="w-[7%] font-semibold px-[10px]">
                Jenis Kelamin (P/L)
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Simpanan Pokok</p>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Simpanan Wajib</p>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Simpanan Sukarela</p>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Total Pinjaman</p>
                </div>
              </th>
              <th className="w-[8%] font-semibold px-[10px]">Ketua Kelompok</th>
              <th className="w-[9%] font-semibold px-[10px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {members ? (
              members.map((data, index) => (
                <tr
                  key={data.id}
                  className=" border-b border-[#DDE1E6] break-words"
                >
                  <td className="px-[10px]">{data.id}</td>
                  <td className="px-[10px]">{data.name}</td>
                  <td className="px-[10px]">{data.nik}</td>
                  <td className="px-[10px]">
                    {data.gender === "laki-laki" ? "L" : "P"}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(data.deposit.principalDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(data.deposit.mandatoryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(data.deposit.voluntaryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(data.totalLoan)}
                  </td>
                  <td className="px-[10px]">{data.leader.name}</td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[64px]">
                      {data.isActive ? (
                        <button className="bg-green-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Aktif
                        </button>
                      ) : (
                        <button className="bg-red-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Tidak Aktif
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <>Loading...</>
            )}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel=<NextLabel />
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel=<PreviousLabel />
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center mt-[20px] gap-[12px]"
          pageClassName="h-[32px] w-[32px] flex justify-center items-center bg-[#f1f1f1] rounded-lg text-black border border-[#f1f1f1] cursor-pointer"
          previousClassName="h-[32px] w-[32px] bg-white rounded-lg text-black border border-[#f1f1f1]"
          nextClassName="h-[32px] w-[32px] bg-white rounded-lg text-black border border-[#f1f1f1]"
          activeLinkClassName="h-[32px] w-[32px] flex justify-center items-center bg-[#2F80ED] rounded-lg text-white border border-[#f1f1f1]"
        />
      </div>
      <iframe src="/data-master-print" ref={ref} className="hidden"></iframe>
    </div>
  );
};

export default DataMaster;
