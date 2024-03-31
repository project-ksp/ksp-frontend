import React from "react";
import Link from "next/link";
import Image from "next/image";

const CetakFormulir = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Cetak Formulir</h2>
        <div className="flex gap-4">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/status-pengajuan/anggota-baru"}>Kembali</Link>
          </button>
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            Print
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/images/formulir.png"}
          alt="Formulir"
          width={1116}
          height={1578}
        />
      </div>
    </div>
  );
};

export default CetakFormulir;
