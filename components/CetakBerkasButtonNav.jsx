"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CetakBerkasButtonNav = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={"/cetak-berkas/cetak-formulir"}
        className={`${
          pathname.includes("cetak-formulir")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Cetak Formulir
      </Link>
      <Link
        href={"/cetak-berkas/cetak-blanko-pinjaman"}
        className={`${
          pathname.includes("cetak-blanko-pinjaman")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Cetak Blanko Pinjaman
      </Link>
      <Link
        href={"/cetak-berkas/cetak-blanko-simpanan"}
        className={`${
          pathname.includes("cetak-blanko-simpanan")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Cetak Blanko Simpanan
      </Link>
      <Link
        href={"/cetak-berkas/cetak-buku-anggota"}
        className={`${
          pathname.includes("cetak-buku-anggota")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Cetak Buku Anggota
      </Link>
      <Link
        href={"/cetak-berkas/cetak-kartu-anggota"}
        className={`${
          pathname.includes("cetak-kartu-anggota")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Cetak Kartu Anggota
      </Link>
    </>
  );
};

export default CetakBerkasButtonNav;
