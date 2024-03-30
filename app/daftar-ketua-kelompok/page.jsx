import React from "react";
import Link from "next/link";

const DaftarKetuaKelompok = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-black">Daftar Ketua Kelompok</h2>
      <div className="flex h-[48px] gap-3">
        <div className="flex-grow relative">
          <input
            type="text"
            name="search"
            placeholder="Cari cabang"
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
          href={`/daftar-ketua-kelompok/tambah`}
          className="w-[250px] bg-primary px-[15px] py-[8px] flex justify-center items-center text-white rounded-md"
        >
          <p className="text-base font-regular">Tambah Ketua Kelompok</p>
        </Link>
      </div>
      <div className="bg-white rounded-xl p-[20px]">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6]">
              <th className="w-[8%] font-semibold py-[13px] px-[10px]">
                ID Ketua Kelompok
              </th>
              <th className="w-[11%] font-semibold px-[10px]">
                <p>Nama Ketua Kelompok</p>
              </th>
              <th className="w-[13%] font-semibold px-[10px]">NIK</th>
              <th className="w-[5%] font-semibold px-[10px]">Umur (Th.)</th>
              <th className="w-[7%] font-semibold px-[10px]">
                Jenis Kelamin (P/L)
              </th>
              <th className="w-[10%] font-semibold px-[10px]">
                Tempat Tinggal
              </th>
              <th className="w-[11%] font-semibold px-[10px]">No Telp</th>
              <th className="w-[9%] font-semibold px-[10px]">Banyak Anggota</th>
              <th className="w-[10%] font-semibold px-[10px]">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="break-words px-[10px]">01.02.004</td>
              <td className="px-[10px]">Nama Anggota</td>
              <td className="px-[10px]">3522061124020111</td>
              <td className="px-[10px]">Umur (Th.)</td>
              <td className="px-[10px]">L</td>
              <td className="px-[10px]">Kediri</td>
              <td className="px-[10px]">088231746821</td>
              <td className="px-[10px]">10</td>
              <td className="px-[10px]">
                <div className="flex justify-center items-center h-[48px]">
                  <Link
                    href={"/daftar-ketua-kelompok/detail"}
                    className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                  >
                    Cek Detail
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DaftarKetuaKelompok;