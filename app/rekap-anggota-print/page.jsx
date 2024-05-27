"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
const PrintRekapAnggota = () => {
  const { data: session, status } = useSession();

  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    if (status === "loading") return;
    const getMembers = async () => {
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
    getMembers();
  }, [status, session]);

  const [print, setPrint] = useState(false);
  useEffect(() => {
    if (anggota.length > 0 && !print) {
      setPrint(true);
    }
  }, [anggota, print]);

  if (status === "loading") return <div>Loading...</div>;
  return (
    <div className="w-screen">
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
                  <div className="flex justify-center items-center h-[64px]">
                    {item.isActive ? (
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
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintRekapAnggota;
