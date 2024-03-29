"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ButtonNav = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={"/daftar-anggota/tambah-anggota/anggota-baru"}
        className={`${
          pathname.includes("anggota-baru")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Anggota Baru
      </Link>
      <Link
        href={"/daftar-anggota/tambah-anggota/anggota-lama"}
        className={`${
          pathname.includes("anggota-lama")
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } w-[228px] h-[48px] rounded-md flex items-center justify-center`}
      >
        Anggota Lama
      </Link>
    </>
  );
};

export default ButtonNav;
