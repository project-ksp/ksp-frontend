"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SIDENAV_ITEMS } from "@/styles/constants";

const Sidebar = () => {
  return (
    <div className="w-[280px] flex flex-col justify-between p-[28px] bg-primary fixed h-screen">
      <div className="flex flex-col">
        <div className="flex items-center mb-[60px]">
          <div className="w-[35px] h-[40px] bg-filled-color rounded-md mr-[15px]"></div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg">KSP</h3>
            <p className="text-white font-regular text-base">Sentosa Makmur</p>
          </div>
        </div>
        {SIDENAV_ITEMS.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-col">
        <ButtonKeluar />
        <ButtonAccount jabatan="Teller" nama="Indah Sari" />
      </div>
    </div>
  );
};

export default Sidebar;

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`mb-[16px] py-[14px] px-[16px] flex items-center rounded-md hover:bg-secondary ${
        pathname.includes(item.path) ? "bg-[#d9d9d9]" : ""
      }`}
    >
      {pathname.includes(item.path) ? item.iconSecondary : item.icon}
      <p
        className={`${
          pathname.includes(item.path) ? "text-black" : "text-white"
        } text-base font-medium ml-[13px]`}
      >
        {item.title}
      </p>
    </Link>
  );
};

const ButtonAccount = ({ jabatan, nama }) => {
  return (
    <button className="flex items-center border-t border-white/10 pt-[15px] justify-between">
      <div className="flex items-center">
        <Image
          src={"/images/Image.png"}
          alt="image"
          width={32}
          height={32}
          className="mr-[12px]"
        />
        <div className="flex flex-col items-start">
          <p className="text-white text-base font-semibold ">{jabatan}</p>
          <p className="text-white text-sm font-regular">{nama}</p>
        </div>
      </div>
      <svg
        width="4"
        height="20"
        viewBox="0 0 4 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="white" />
        <circle cx="2" cy="10" r="2" fill="white" />
        <circle cx="2" cy="18" r="2" fill="white" />
      </svg>
    </button>
  );
};

const ButtonKeluar = () => {
  return (
    <>
      <button className="bg-white/10  mb-[5px] py-[14px] px-[16px] flex items-center rounded-md">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[12px]"
        >
          <path
            d="M8.3335 16.1673L12.5002 12.0007L8.3335 7.83398"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 12H2.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 4.5H15.8333C16.2754 4.5 16.6993 4.67559 17.0118 4.98816C17.3244 5.30072 17.5 5.72464 17.5 6.16667V17.8333C17.5 18.2754 17.3244 18.6993 17.0118 19.0118C16.6993 19.3244 16.2754 19.5 15.8333 19.5H12.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-mainBg text-base font-bold">Keluar</p>
      </button>
      ;
    </>
  );
};
