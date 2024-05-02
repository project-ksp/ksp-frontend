import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const CetakKartuAnggota = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-xl p-[20px] flex flex-col gap-4">
        <h2 className="text-black font-bold text-lg">Kartu Anggota</h2>
        <div
          className={`${plusJakartaSans.className} flex flex-col bg-gradient-to-br from-primary to-[#71E9D3] p-[24px] w-[343px] h-[218px] rounded-2xl gap-[30px]`}
        >
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-white">KSP Sentosa Makmur</p>
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={35}
              height={40}
              priority
              quality={100}
            />
          </div>
          <div className="text-white font-bold text-xl">
            8763 2736 9873 0329
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-white">
              <p className="text-sm">Nama Anggota</p>
              <p className="font-bold">HILLERY NEVELIN</p>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-sm">Kepala Cabang</p>
              <p className="font-bold">M Syakur</p>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-sm">Exp</p>
              <p className="font-bold">17/24</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center ml-auto mt-2">
        Print
      </button>
    </div>
  );
};

export default CetakKartuAnggota;
