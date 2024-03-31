"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownSelector from "@/components/DropdownSelector";
import Modal from "@/components/Modal";

const AlasanPenghapusanAnggota = () => {
  const [buktiPendukung, setBuktiPendukung] = useState(null);
  return (
    <>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Alasan Penghapusan Anggota
        </p>
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <input
              type="text"
              name="alasan"
              id="alasan"
              placeholder="Auto Generated"
              value={"Pinjaman Selesai"}
              readOnly
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              disabled
            />
          </div>
          <label htmlFor="buktiPendukung" className="flex">
            {buktiPendukung === null ? (
              <div className="relative h-[80px] w-[80px]">
                <Image
                  src={"/images/image_none.jpg"}
                  alt="Image_none"
                  fill
                  className="absolute rounded-md object-cover top-0"
                />
              </div>
            ) : (
              <div className="relative h-[80px] w-[80px]">
                <Image
                  src={URL.createObjectURL(buktiPendukung)}
                  alt="Image_none"
                  fill
                  className="absolute rounded-md object-cover top-0"
                />
              </div>
            )}
            <div className="flex flex-col ml-2 flex-grow">
              <p>Upload Foto KTP</p>
              <div className="border border-[#d9d9d9] rounded-lg p-[10px] flex mt-1 items-center">
                <div className="px-[25px] py-[2px] w-[177px] border border-secondary rounded-lg text-primary flex items-center">
                  <p>Tambah Foto</p>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3"
                  >
                    <path
                      d="M3.25 14C2.78587 14 2.34075 13.8156 2.01256 13.4874C1.68437 13.1592 1.5 12.7141 1.5 12.25V9.75C1.5 9.55109 1.57902 9.36032 1.71967 9.21967C1.86032 9.07902 2.05109 9 2.25 9C2.44891 9 2.63968 9.07902 2.78033 9.21967C2.92098 9.36032 3 9.55109 3 9.75V12.25C3 12.388 3.112 12.5 3.25 12.5H13.75C13.8163 12.5 13.8799 12.4737 13.9268 12.4268C13.9737 12.3799 14 12.3163 14 12.25V9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9C14.9489 9 15.1397 9.07902 15.2803 9.21967C15.421 9.36032 15.5 9.55109 15.5 9.75V12.25C15.5 12.7141 15.3156 13.1592 14.9874 13.4874C14.6592 13.8156 14.2141 14 13.75 14H3.25Z"
                      fill="#004080"
                    />
                    <path
                      d="M12.2795 4.72C12.3491 4.7896 12.4043 4.87223 12.442 4.96316C12.4797 5.0541 12.4991 5.15157 12.4991 5.25C12.4991 5.34843 12.4797 5.44589 12.442 5.53683C12.4043 5.62777 12.3491 5.7104 12.2795 5.78C12.2099 5.8496 12.1273 5.90481 12.0364 5.94248C11.9454 5.98014 11.848 5.99953 11.7495 5.99953C11.6511 5.99953 11.5536 5.98014 11.4627 5.94248C11.3718 5.90481 11.2891 5.8496 11.2195 5.78L9.24953 3.811V9.5C9.24953 9.69891 9.17052 9.88968 9.02986 10.0303C8.88921 10.171 8.69845 10.25 8.49953 10.25C8.30062 10.25 8.10986 10.171 7.9692 10.0303C7.82855 9.88968 7.74953 9.69891 7.74953 9.5V3.811L5.77953 5.78C5.70993 5.8496 5.6273 5.90481 5.53637 5.94248C5.44543 5.98014 5.34796 5.99953 5.24953 5.99953C5.1511 5.99953 5.05364 5.98014 4.9627 5.94248C4.87176 5.90481 4.78913 5.8496 4.71953 5.78C4.64993 5.7104 4.59472 5.62777 4.55705 5.53683C4.51939 5.44589 4.5 5.34843 4.5 5.25C4.5 5.15157 4.51939 5.0541 4.55705 4.96316C4.59472 4.87223 4.64993 4.7896 4.71953 4.72L7.96953 1.47C8.0391 1.40033 8.12171 1.34507 8.21266 1.30736C8.3036 1.26965 8.40108 1.25024 8.49953 1.25024C8.59798 1.25024 8.69547 1.26965 8.78641 1.30736C8.87735 1.34507 8.95997 1.40033 9.02953 1.47L12.2795 4.72Z"
                      fill="#004080"
                    />
                  </svg>
                </div>
                <p className="text-[#3c3c3c] ml-[30px]">
                  {buktiPendukung === null
                    ? "Tidak ada file terpilih"
                    : buktiPendukung.name}
                </p>
              </div>
              <input
                type="file"
                name="buktiPendukung"
                id="buktiPendukung"
                hidden
                onChange={(e) => setBuktiPendukung(e.target.files[0])}
              />
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default AlasanPenghapusanAnggota;
