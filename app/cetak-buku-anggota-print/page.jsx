"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const PrintBukuAnggota = () => {
  const { data: session, status } = useSession();

  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    if (status === "loading") return;
    const getMembers = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members/all-members`,
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
            <th className="w-[8%] font-semibold py-[13px] px-2 text-center border-r border-[#DDE1E6] text-xs">
              No Anggota
            </th>
            <th className="w-[11%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              <p>Nama</p>
            </th>
            <th className="w-[15%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              NIK
            </th>
            <th className="w-[5%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Umur
            </th>
            <th className="w-[5%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Jenis Kelamin (P/L)
            </th>
            <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Mata Pencaharian
            </th>
            <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tempat Tinggal
            </th>
            <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tanggal Masuk
            </th>
            <th className="w-[8%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Cap Ibu Jari Kiri Anggota( tertuang dalam permohonan )
            </th>
            <th className="w-[8%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tanda tangan Anggota( tertuang dalam permohonan )
            </th>
            <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tanda tangan pengurus ( tertuang dalam permohonan )
            </th>
            <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tanggal berhenti/ Keluar
            </th>
            <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Sebab-sebab berhenti
            </th>
            <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-xs">
              Tanda tangan pengurus/ pimpinan cabang
            </th>
          </tr>
        </thead>
        <tbody>
          {anggota.length > 0 &&
            anggota.map((item, index) => (
              <tr key={item.id} className=" border-b border-[#DDE1E6]">
                <td className="break-words text-xs text-center px-3 border-r border-[#dde1e6]">
                  {item.id}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item.name}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item.nik}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {(
                    new Date().getFullYear() -
                    new Date(item.birthDate).getFullYear()
                  ).toString()}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item.gender === "laki-laki" ? "L" : "P"}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item.occupation}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item.address}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {new Date(item.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center"></td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center"></td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  <Image
                    src={"/images/TTD_Ketua.png"}
                    width={20}
                    height={20}
                    className="size-5 mx-auto"
                    alt=""
                  />
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item?.deleteRequests?.status === "disetujui" &&
                    new Date(item.deleteRequests.updatedAt).toLocaleDateString(
                      "id-ID",
                      {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      }
                    )}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item?.deleteRequests?.status === "disetujui" &&
                    item.deleteRequests.reason}
                </td>
                <td className="px-3 border-r border-[#dde1e6] break-words text-xs text-center">
                  {item?.deleteRequests?.status === "disetujui" && (
                    <Image
                      src={"/images/TTD_Ketua.png"}
                      width={20}
                      height={20}
                      className="size-5"
                      alt=""
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintBukuAnggota;
