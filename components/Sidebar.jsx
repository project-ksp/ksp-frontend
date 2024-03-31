"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SIDENAV_ITEMS, SIDENAV_ITEMS_KEPCAB } from "@/data/constants";
import Modal from "./Modal";

const Sidebar = () => {
  const [showProsesData, setProsesData] = useState(false);
  return (
    <>
      <div className="w-[280px] flex flex-col justify-between p-[28px] bg-primary fixed h-screen overflow-scroll">
        <div className="flex flex-col">
          <div className="flex items-center mb-[60px]">
            <div className="w-[35px] h-[40px] bg-filled-color rounded-md mr-[15px]"></div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-lg">KSP</h3>
              <p className="text-white font-regular text-base">
                Sentosa Makmur
              </p>
            </div>
          </div>
          {SIDENAV_ITEMS_KEPCAB.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <div className="flex flex-col">
          <ButtonKeluar click={() => setProsesData(true)} />
          <ButtonAccount jabatan="Teller" nama="Indah Sari" />
        </div>
      </div>
      <LogoutModal
        isVisible={showProsesData}
        onClose={() => setProsesData(false)}
      />
    </>
  );
};

export default Sidebar;

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={() => setSubMenuOpen(!subMenuOpen)}
            className={`mb-[16px] py-[14px] px-[16px] relative flex items-center rounded-md w-full justify-between hover:bg-secondary ${
              subMenuOpen ? "bg-[#fff]" : ""
            }`}
          >
            <div className="flex items-center">
              {subMenuOpen ? (
                <div className="invert">{item.icon}</div>
              ) : (
                item.icon
              )}
              <p
                className={`${
                  subMenuOpen ? "text-black" : "text-white"
                } text-base font-medium ml-[13px] break-words text-start`}
              >
                {item.title}
              </p>
            </div>
            <div
              className={`${subMenuOpen ? "invert" : "fill-primary"} ${
                subMenuOpen ? "rotate-180" : ""
              } transition-transform`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
          {subMenuOpen && (
            <div className="bg-[#fff] -my-3 rounded-lg transition-all duration-300">
              {item.subMenuItems.map((subItem, index) => {
                return (
                  <div
                    key={index}
                    className="border-b border-black/20 pl-[48px] pr-[22px] rounded-md h-[48px] flex items-center hover:bg-secondary"
                  >
                    <Link
                      href={subItem.path}
                      className={`${
                        pathname.includes(subItem.path) ? "font-bold" : ""
                      } `}
                    >
                      <p>{subItem.title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`mb-[16px] py-[14px] px-[16px] flex items-center rounded-md hover:bg-secondary ${
            pathname.includes(item.path) ? "bg-[#d9d9d9]" : ""
          }`}
        >
          {pathname.includes(item.path) ? (
            <div className="invert">{item.icon}</div>
          ) : (
            item.icon
          )}
          <p
            className={`${
              pathname.includes(item.path) ? "text-black" : "text-white"
            } text-base font-medium ml-[13px]`}
          >
            {item.title}
          </p>
        </Link>
      )}
    </div>
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

const ButtonKeluar = ({ click }) => {
  return (
    <>
      <button
        onClick={click}
        className="bg-white/10  mb-[5px] py-[14px] px-[16px] flex items-center rounded-md"
      >
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

const LogoutModal = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <h3 className="text-xl text-center font-bold text-black">Keluar?</h3>
      <p className="text-base text-black font-regular text-center mb-4">
        Apakah Anda yakin untuk Keluar?
      </p>
      <div className="flex gap-3">
        <button
          type="submit"
          className="w-[224px] px-[20px] py-[12px] text-white bg-red-status-1 rounded-lg mx-auto"
          onClick={(e) => {
            onClose();
          }}
        >
          Tidak
        </button>
        <button
          type="submit"
          className="w-[224px] px-[20px] py-[12px] text-white bg-green-status-1 rounded-lg mx-auto"
          onClick={(e) => {
            onClose();
          }}
        >
          Ya
        </button>
      </div>
    </Modal>
  );
};
