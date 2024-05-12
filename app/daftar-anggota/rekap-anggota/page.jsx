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
                  <p>Total Simpanan</p>
                </div>
              </th>
              <th className="w-[12%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Total Pinjaman</p>
                </div>
              </th>
              <th className="w-[8%] font-semibold px-[10px]">Ketua Kelompok</th>
              <th className="w-[9%] font-semibold px-[10px]">Status</th>
              <th className="w-[9%] font-semibold px-[10px]">Detail Anggota</th>
            </tr>
          </thead>
          <tbody>
            {anggota.length > 0 &&
              anggota.map((item, index) => (
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
                    }).format(item.totalDeposit)}
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
