"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const CetakBukuAnggota = () => {
  const { data: session, status } = useSession();
  const [anggota, setAnggota] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (status === "loading") return;

    const getAnggota = async () => {
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

    getAnggota();
  }, [status, session]);

  if (status === "loading") return <Loading />;

  return (
    <div className="flex flex-col gap-2">
      <button
        href={`/cetak-buku-anggota-print`}
        onClick={() => {
          ref.current.contentWindow.print();
        }}
        className="w-1/5 bg-primary h-[48px] flex justify-center items-center text-white rounded-md ms-auto"
      >
        <p className="text-base font-regular">Cetak Buku Anggota</p>
      </button>
      <div className="bg-white p-[20px] rounded-xl">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6]">
              <th className="w-[8%] font-semibold py-[13px] px-2 text-center border-r border-[#DDE1E6] text-sm">
                No Anggota
              </th>
              <th className="w-[11%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                <p>Nama</p>
              </th>
              <th className="w-[13%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                NIK
              </th>
              <th className="w-[7%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Umur
              </th>
              <th className="w-[7%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Jenis Kelamin (P/L)
              </th>
              <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Mata Pencaharian
              </th>
              <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tempat Tinggal
              </th>
              <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tanggal Masuk
              </th>
              <th className="w-[12%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Cap Ibu Jari Kiri Anggota( tertuang dalam permohonan )
              </th>
              <th className="w-[8%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tanda tangan Anggota( tertuang dalam permohonan )
              </th>
              <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tanda tangan pengurus ( tertuang dalam permohonan )
              </th>
              <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tanggal berhenti/ Keluar
              </th>
              <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Sebab-sebab berhenti
              </th>
              <th className="w-[9%] font-semibold px-2 text-center border-r border-[#DDE1E6] text-sm">
                Tanda tangan pengurus/ pimpinan cabang
              </th>
            </tr>
          </thead>
          <tbody>
            {anggota.length > 0 &&
              anggota.slice(0, 20).map((item, index) => (
                <tr key={item.id} className=" border-b border-[#DDE1E6]">
                  <td className="break-words text-sm text-center px-3 border-r border-[#dde1e6]">
                    {item.id}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item.name}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item.nik}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {(
                      new Date().getFullYear() -
                      new Date(item.birthDate).getFullYear()
                    ).toString()}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item.gender === "laki-laki" ? "L" : "P"}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item.occupation}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item.address}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {new Date(item.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center"></td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center"></td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    <Image
                      src={"/images/TTD_Ketua.png"}
                      width={20}
                      height={20}
                      className="size-5 mx-auto"
                      alt=""
                    />
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item?.deleteRequests?.status === "disetujui" &&
                      new Date(
                        item.deleteRequests.updatedAt
                      ).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
                    {item?.deleteRequests?.status === "disetujui" &&
                      member.deleteRequests.reason}
                  </td>
                  <td className="px-3 border-r border-[#dde1e6] break-words text-sm text-center">
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
      <iframe
        src={"/cetak-buku-anggota-print"}
        className="hidden"
        ref={ref}
      ></iframe>
    </div>
  );
};

export default CetakBukuAnggota;
