import React from "react";
import Link from "next/link";

const AccountBlock = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-2xl font-bold text-black">Data Master</h2>
      <div className="flex h-[48px] gap-[18px]">
        <div className="w-3/5 relative">
          <input
            type="text"
            name="search"
            placeholder="Cari Akun"
            className="w-full bg-white rounded-md p-[12px] focus:outline-none text-base font-regular"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-0 bottom-0 m-auto mr-[12px]"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#525256"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0004 21.0004L16.6504 16.6504"
              stroke="#525256"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link
          href={`/account-block/tambah-akun`}
          className="w-1/5 bg-primary px-[15px] py-[8px] flex justify-center items-center text-white rounded-md"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.14286 6.85714V1.14286C9.14286 0.839753 9.02245 0.549062 8.80812 0.334735C8.5938 0.120408 8.30311 0 8 0C7.6969 0 7.40621 0.120408 7.19188 0.334735C6.97755 0.549062 6.85714 0.839753 6.85714 1.14286V6.85714H1.14286C0.839753 6.85714 0.549062 6.97755 0.334735 7.19188C0.120408 7.40621 0 7.6969 0 8C0 8.30311 0.120408 8.5938 0.334735 8.80812C0.549062 9.02245 0.839753 9.14286 1.14286 9.14286H6.85714V14.8571C6.85714 15.1602 6.97755 15.4509 7.19188 15.6653C7.40621 15.8796 7.6969 16 8 16C8.30311 16 8.5938 15.8796 8.80812 15.6653C9.02245 15.4509 9.14286 15.1602 9.14286 14.8571V9.14286H14.8571C15.1602 9.14286 15.4509 9.02245 15.6653 8.80812C15.8796 8.5938 16 8.30311 16 8C16 7.6969 15.8796 7.40621 15.6653 7.19188C15.4509 6.97755 15.1602 6.85714 14.8571 6.85714H9.14286Z"
              fill="white"
            />
          </svg>
          <p className="ml-5 text-base font-regular">Tambah Akun</p>
        </Link>
        <button className="w-1/5 bg-primary px-[15px] py-[8px] flex justify-center items-center text-white rounded-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 11.6667V15.2222C17 15.6937 16.8127 16.1459 16.4793 16.4793C16.1459 16.8127 15.6937 17 15.2222 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V11.6667M4.55556 7.22222L9 11.6667M9 11.6667L13.4444 7.22222M9 11.6667V1"
              stroke="#F4F5F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="ml-5 text-base font-regular">Download CSV</p>
        </button>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6] ">
              <th className="w-1/5 py-[13px] px-[10px]">ID Cabang</th>
              <th className="w-1/5 px-[10px]">Username</th>
              <th className="w-1/5 px-[10px]">Password</th>
              <th className="w-1/5 px-[10px]">Pemilik Akun</th>
              <th className="w-1/5 px-[10px]">Jabatan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
            <tr className="h-[48px] border-b border-[#DDE1E6]">
              <td className="py-[13px] px-[10px] ">01</td>
              <td className="px-[10px]">qwerty01</td>
              <td className="px-[10px]">password1</td>
              <td className="px-[10px]">Roni</td>
              <td className="px-[10px]">Owner</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountBlock;
