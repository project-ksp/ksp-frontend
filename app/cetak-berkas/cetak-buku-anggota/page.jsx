import React from "react";
import Link from "next/link";
import Image from "next/image";

const CetakBukuAnggota = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Image
          src={"/images/cover_buku.jpg"}
          alt="Blanko Pinjaman"
          width={1116}
          height={1578}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={"/images/table_buku.jpg"}
          alt="Blanko Pinjaman"
          width={1116}
          height={1578}
        />
      </div>
      <Link href={"/documents/buku_daftar_anggota.pdf"} className="ml-auto ">
        <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center mt-2">
          Print
        </button>
      </Link>
    </div>
  );
};

export default CetakBukuAnggota;
