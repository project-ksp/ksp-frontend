"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

const RekapAnggota = () => {
  const { data: session, status } = useSession();
  const [anggota, setAnggota] = useState([]);
  const [printed, setPrinted] = useState(false);
  const ref = useRef();

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Toggle function to update the sorting state
  const toggleSort = (column) => {
    setSortConfig((prevState) => {
      if (prevState.key === column) {
        // Toggle direction if the same column is clicked again
        return {
          key: column,
          direction:
            prevState.direction === "ascending" ? "descending" : "ascending",
        };
      } else {
        // Set new column and default to ascending
        return {
          key: column,
          direction: "ascending",
        };
      }
    });
  };

  // Sorting logic
  const sortedMembers = [...anggota].sort((a, b) => {
    if (sortConfig.key) {
      if (sortConfig.key === "totalLoan") {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue)
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (aValue > bValue)
          return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      } else {
        const keys = sortConfig.key.split(".");
        const aValue = keys.reduce((obj, key) => obj[key], a);
        const bValue = keys.reduce((obj, key) => obj[key], b);

        if (aValue < bValue)
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (aValue > bValue)
          return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      }
    }
    return 0;
  });

  useEffect(() => {
    if (status === "loading") return;

    const getAnggota = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members/recap`,
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
        setAnggota(data.data);
      } else {
        toast.error(data.message);
      }
    };

    getAnggota();
  }, [status, session]);

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-black">Rekap Anggota</h2>
      <button
        href={`/rekap-anggota-print`}
        onClick={() => {
          ref.current.contentWindow.print();
        }}
        className="w-1/5 bg-primary h-[48px] flex justify-center items-center text-white rounded-md"
      >
        <p className="text-base font-regular">Cetak Rekap Data</p>
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[20px]"
                    onClick={() => toggleSort("deposit.principalDeposit")}
                  >
                    <path
                      d="M10 10C10 10.2486 9.90123 10.4871 9.72541 10.6629C9.5496 10.8387 9.31114 10.9375 9.0625 10.9375H3.75C3.50136 10.9375 3.2629 10.8387 3.08709 10.6629C2.91127 10.4871 2.8125 10.2486 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H9.0625C9.31114 9.0625 9.5496 9.16127 9.72541 9.33709C9.90123 9.5129 10 9.75136 10 10ZM3.75 5.9375H14.0625C14.3111 5.9375 14.5496 5.83873 14.7254 5.66291C14.9012 5.4871 15 5.24864 15 5C15 4.75136 14.9012 4.5129 14.7254 4.33709C14.5496 4.16127 14.3111 4.0625 14.0625 4.0625H3.75C3.50136 4.0625 3.2629 4.16127 3.08709 4.33709C2.91127 4.5129 2.8125 4.75136 2.8125 5C2.8125 5.24864 2.91127 5.4871 3.08709 5.66291C3.2629 5.83873 3.50136 5.9375 3.75 5.9375ZM7.8125 14.0625H3.75C3.50136 14.0625 3.2629 14.1613 3.08709 14.3371C2.91127 14.5129 2.8125 14.7514 2.8125 15C2.8125 15.2486 2.91127 15.4871 3.08709 15.6629C3.2629 15.8387 3.50136 15.9375 3.75 15.9375H7.8125C8.06114 15.9375 8.2996 15.8387 8.47541 15.6629C8.65123 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.65123 14.5129 8.47541 14.3371C8.2996 14.1613 8.06114 14.0625 7.8125 14.0625ZM18.1633 12.4617C18.0762 12.3743 17.9727 12.305 17.8587 12.2577C17.7448 12.2103 17.6226 12.186 17.4992 12.186C17.3758 12.186 17.2537 12.2103 17.1397 12.2577C17.0257 12.305 16.9223 12.3743 16.8352 12.4617L15.3125 13.9844V8.75C15.3125 8.50136 15.2137 8.2629 15.0379 8.08709C14.8621 7.91127 14.6236 7.8125 14.375 7.8125C14.1264 7.8125 13.8879 7.91127 13.7121 8.08709C13.5363 8.2629 13.4375 8.50136 13.4375 8.75V13.9844L11.9133 12.4594C11.7372 12.2833 11.4983 12.1843 11.2492 12.1843C11.0001 12.1843 10.7613 12.2833 10.5852 12.4594C10.409 12.6355 10.3101 12.8744 10.3101 13.1234C10.3101 13.3725 10.409 13.6114 10.5852 13.7875L13.7102 16.9125C13.7973 16.9999 13.9007 17.0692 14.0147 17.1166C14.1287 17.1639 14.2508 17.1882 14.3742 17.1882C14.4976 17.1882 14.6198 17.1639 14.7337 17.1166C14.8477 17.0692 14.9512 16.9999 15.0383 16.9125L18.1633 13.7875C18.3391 13.6117 18.4378 13.3732 18.4378 13.1246C18.4378 12.876 18.3391 12.6375 18.1633 12.4617Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Simpanan Wajib</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[20px]"
                    onClick={() => {
                      toggleSort("deposit.mandatoryDeposit");
                    }}
                  >
                    <path
                      d="M10 10C10 10.2486 9.90123 10.4871 9.72541 10.6629C9.5496 10.8387 9.31114 10.9375 9.0625 10.9375H3.75C3.50136 10.9375 3.2629 10.8387 3.08709 10.6629C2.91127 10.4871 2.8125 10.2486 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H9.0625C9.31114 9.0625 9.5496 9.16127 9.72541 9.33709C9.90123 9.5129 10 9.75136 10 10ZM3.75 5.9375H14.0625C14.3111 5.9375 14.5496 5.83873 14.7254 5.66291C14.9012 5.4871 15 5.24864 15 5C15 4.75136 14.9012 4.5129 14.7254 4.33709C14.5496 4.16127 14.3111 4.0625 14.0625 4.0625H3.75C3.50136 4.0625 3.2629 4.16127 3.08709 4.33709C2.91127 4.5129 2.8125 4.75136 2.8125 5C2.8125 5.24864 2.91127 5.4871 3.08709 5.66291C3.2629 5.83873 3.50136 5.9375 3.75 5.9375ZM7.8125 14.0625H3.75C3.50136 14.0625 3.2629 14.1613 3.08709 14.3371C2.91127 14.5129 2.8125 14.7514 2.8125 15C2.8125 15.2486 2.91127 15.4871 3.08709 15.6629C3.2629 15.8387 3.50136 15.9375 3.75 15.9375H7.8125C8.06114 15.9375 8.2996 15.8387 8.47541 15.6629C8.65123 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.65123 14.5129 8.47541 14.3371C8.2996 14.1613 8.06114 14.0625 7.8125 14.0625ZM18.1633 12.4617C18.0762 12.3743 17.9727 12.305 17.8587 12.2577C17.7448 12.2103 17.6226 12.186 17.4992 12.186C17.3758 12.186 17.2537 12.2103 17.1397 12.2577C17.0257 12.305 16.9223 12.3743 16.8352 12.4617L15.3125 13.9844V8.75C15.3125 8.50136 15.2137 8.2629 15.0379 8.08709C14.8621 7.91127 14.6236 7.8125 14.375 7.8125C14.1264 7.8125 13.8879 7.91127 13.7121 8.08709C13.5363 8.2629 13.4375 8.50136 13.4375 8.75V13.9844L11.9133 12.4594C11.7372 12.2833 11.4983 12.1843 11.2492 12.1843C11.0001 12.1843 10.7613 12.2833 10.5852 12.4594C10.409 12.6355 10.3101 12.8744 10.3101 13.1234C10.3101 13.3725 10.409 13.6114 10.5852 13.7875L13.7102 16.9125C13.7973 16.9999 13.9007 17.0692 14.0147 17.1166C14.1287 17.1639 14.2508 17.1882 14.3742 17.1882C14.4976 17.1882 14.6198 17.1639 14.7337 17.1166C14.8477 17.0692 14.9512 16.9999 15.0383 16.9125L18.1633 13.7875C18.3391 13.6117 18.4378 13.3732 18.4378 13.1246C18.4378 12.876 18.3391 12.6375 18.1633 12.4617Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Simpanan Sukarela</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[20px]"
                    onClick={() => {
                      toggleSort("deposit.voluntaryDeposit");
                    }}
                  >
                    <path
                      d="M10 10C10 10.2486 9.90123 10.4871 9.72541 10.6629C9.5496 10.8387 9.31114 10.9375 9.0625 10.9375H3.75C3.50136 10.9375 3.2629 10.8387 3.08709 10.6629C2.91127 10.4871 2.8125 10.2486 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H9.0625C9.31114 9.0625 9.5496 9.16127 9.72541 9.33709C9.90123 9.5129 10 9.75136 10 10ZM3.75 5.9375H14.0625C14.3111 5.9375 14.5496 5.83873 14.7254 5.66291C14.9012 5.4871 15 5.24864 15 5C15 4.75136 14.9012 4.5129 14.7254 4.33709C14.5496 4.16127 14.3111 4.0625 14.0625 4.0625H3.75C3.50136 4.0625 3.2629 4.16127 3.08709 4.33709C2.91127 4.5129 2.8125 4.75136 2.8125 5C2.8125 5.24864 2.91127 5.4871 3.08709 5.66291C3.2629 5.83873 3.50136 5.9375 3.75 5.9375ZM7.8125 14.0625H3.75C3.50136 14.0625 3.2629 14.1613 3.08709 14.3371C2.91127 14.5129 2.8125 14.7514 2.8125 15C2.8125 15.2486 2.91127 15.4871 3.08709 15.6629C3.2629 15.8387 3.50136 15.9375 3.75 15.9375H7.8125C8.06114 15.9375 8.2996 15.8387 8.47541 15.6629C8.65123 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.65123 14.5129 8.47541 14.3371C8.2996 14.1613 8.06114 14.0625 7.8125 14.0625ZM18.1633 12.4617C18.0762 12.3743 17.9727 12.305 17.8587 12.2577C17.7448 12.2103 17.6226 12.186 17.4992 12.186C17.3758 12.186 17.2537 12.2103 17.1397 12.2577C17.0257 12.305 16.9223 12.3743 16.8352 12.4617L15.3125 13.9844V8.75C15.3125 8.50136 15.2137 8.2629 15.0379 8.08709C14.8621 7.91127 14.6236 7.8125 14.375 7.8125C14.1264 7.8125 13.8879 7.91127 13.7121 8.08709C13.5363 8.2629 13.4375 8.50136 13.4375 8.75V13.9844L11.9133 12.4594C11.7372 12.2833 11.4983 12.1843 11.2492 12.1843C11.0001 12.1843 10.7613 12.2833 10.5852 12.4594C10.409 12.6355 10.3101 12.8744 10.3101 13.1234C10.3101 13.3725 10.409 13.6114 10.5852 13.7875L13.7102 16.9125C13.7973 16.9999 13.9007 17.0692 14.0147 17.1166C14.1287 17.1639 14.2508 17.1882 14.3742 17.1882C14.4976 17.1882 14.6198 17.1639 14.7337 17.1166C14.8477 17.0692 14.9512 16.9999 15.0383 16.9125L18.1633 13.7875C18.3391 13.6117 18.4378 13.3732 18.4378 13.1246C18.4378 12.876 18.3391 12.6375 18.1633 12.4617Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Total Pinjaman</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[20px]"
                    onClick={() => toggleSort("totalLoan")}
                  >
                    <path
                      d="M10 10C10 10.2486 9.90123 10.4871 9.72541 10.6629C9.5496 10.8387 9.31114 10.9375 9.0625 10.9375H3.75C3.50136 10.9375 3.2629 10.8387 3.08709 10.6629C2.91127 10.4871 2.8125 10.2486 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H9.0625C9.31114 9.0625 9.5496 9.16127 9.72541 9.33709C9.90123 9.5129 10 9.75136 10 10ZM3.75 5.9375H14.0625C14.3111 5.9375 14.5496 5.83873 14.7254 5.66291C14.9012 5.4871 15 5.24864 15 5C15 4.75136 14.9012 4.5129 14.7254 4.33709C14.5496 4.16127 14.3111 4.0625 14.0625 4.0625H3.75C3.50136 4.0625 3.2629 4.16127 3.08709 4.33709C2.91127 4.5129 2.8125 4.75136 2.8125 5C2.8125 5.24864 2.91127 5.4871 3.08709 5.66291C3.2629 5.83873 3.50136 5.9375 3.75 5.9375ZM7.8125 14.0625H3.75C3.50136 14.0625 3.2629 14.1613 3.08709 14.3371C2.91127 14.5129 2.8125 14.7514 2.8125 15C2.8125 15.2486 2.91127 15.4871 3.08709 15.6629C3.2629 15.8387 3.50136 15.9375 3.75 15.9375H7.8125C8.06114 15.9375 8.2996 15.8387 8.47541 15.6629C8.65123 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.65123 14.5129 8.47541 14.3371C8.2996 14.1613 8.06114 14.0625 7.8125 14.0625ZM18.1633 12.4617C18.0762 12.3743 17.9727 12.305 17.8587 12.2577C17.7448 12.2103 17.6226 12.186 17.4992 12.186C17.3758 12.186 17.2537 12.2103 17.1397 12.2577C17.0257 12.305 16.9223 12.3743 16.8352 12.4617L15.3125 13.9844V8.75C15.3125 8.50136 15.2137 8.2629 15.0379 8.08709C14.8621 7.91127 14.6236 7.8125 14.375 7.8125C14.1264 7.8125 13.8879 7.91127 13.7121 8.08709C13.5363 8.2629 13.4375 8.50136 13.4375 8.75V13.9844L11.9133 12.4594C11.7372 12.2833 11.4983 12.1843 11.2492 12.1843C11.0001 12.1843 10.7613 12.2833 10.5852 12.4594C10.409 12.6355 10.3101 12.8744 10.3101 13.1234C10.3101 13.3725 10.409 13.6114 10.5852 13.7875L13.7102 16.9125C13.7973 16.9999 13.9007 17.0692 14.0147 17.1166C14.1287 17.1639 14.2508 17.1882 14.3742 17.1882C14.4976 17.1882 14.6198 17.1639 14.7337 17.1166C14.8477 17.0692 14.9512 16.9999 15.0383 16.9125L18.1633 13.7875C18.3391 13.6117 18.4378 13.3732 18.4378 13.1246C18.4378 12.876 18.3391 12.6375 18.1633 12.4617Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </th>
              <th className="w-[8%] font-semibold px-[10px]">Ketua Kelompok</th>
              <th className="w-[9%] font-semibold px-[10px]">Status</th>
              <th className="w-[9%] font-semibold px-[10px]">Detail Anggota</th>
            </tr>
          </thead>
          <tbody>
            {sortedMembers.length > 0 &&
              sortedMembers.map((item, index) => (
                <tr key={item.id} className=" border-b border-[#DDE1E6]">
                  <td className="break-words px-[10px]">{item.id}</td>
                  <td className="px-[10px]">{item.name}</td>
                  <td className="px-[10px]">{item.nik}</td>
                  <td className="px-[10px]">
                    {item.gender === "laki-laki" ? "L" : "P"}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.principalDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.mandatoryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.voluntaryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.totalLoan)}
                  </td>
                  <td className="px-[10px]">{item.leader.name}</td>
                  <td className="px-[10px]">
                    {item.isActive ? (
                      <div className="flex justify-center items-center h-[64px]">
                        <button className="bg-green-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Aktif
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center h-[64px]">
                        <button className="bg-red-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Tidak Aktif
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[64px]">
                      <Link
                        href={`/daftar-anggota/detail/${item.id}`}
                        className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                      >
                        Cek Detail
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <iframe
        src={"/rekap-anggota-print"}
        className="hidden"
        ref={ref}
      ></iframe>
    </div>
  );
};

export default RekapAnggota;
