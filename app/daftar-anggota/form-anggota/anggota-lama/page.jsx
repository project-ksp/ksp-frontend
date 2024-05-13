"use client";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AnggotaLama = () => {
  const { data: session, status } = useSession();

  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (status === "loading") return;
    if (search === "") {
      setMembers([]);
      return;
    }
    const getData = setTimeout(() => {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members/search?query=${search}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setMembers(data.data);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [search, status, session]);

  if (status === "loading") return <Loading />;
  return (
    <>
      <div className="w-full relative">
        <input
          type="text"
          name="search"
          placeholder="Cari ID Anggota"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white rounded-md p-[12px] focus:outline-none text-base font-regular"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 bottom-0 m-auto mr-[12px]"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#525256"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0004 21.0004L16.6504 16.6504"
            stroke="#525256"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {members.length > 0 && (
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
                <th className="w-[8%] font-semibold px-[10px]">
                  Ketua Kelompok
                </th>
                <th className="w-[9%] font-semibold px-[10px]">Status</th>
                <th className="w-[9%] font-semibold px-[10px]">
                  Detail Anggota
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((item, index) => (
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
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[64px]">
                      <Link
                        href={`/daftar-anggota/form-anggota/anggota-lama/detail/${item.id}`}
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
      )}
    </>
  );
};

export default AnggotaLama;
