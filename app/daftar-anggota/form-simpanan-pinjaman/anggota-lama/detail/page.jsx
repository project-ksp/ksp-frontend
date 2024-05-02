import React from "react";
import Image from "next/image";
import Link from "next/link";

const Detail = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-[20px]">
        <p className="text-black font-bold text-lg mb-[10px]">
          Biodata Lengkap Anggota
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <Image
              src={"/images/dummy.png"}
              width={90}
              height={120}
              alt="Foto Diri"
              className="mr-[25px] rounded-md"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl text-black">Ifadatul K</p>
              <p className="text-lg text-black">01-2024-12345</p>
              <div className="bg-green-status-1 text-white text-center my-[8px] rounded-xl w-[86px]">
                Aktif
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="w-1/3">
              <div>
                <label htmlFor="idCabang">ID Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Genetared"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="w-1/3">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  placeholder="Isi Nama Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/3">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  placeholder="Isi ID Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Detail Simpanan
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label htmlFor="simpananPokok">Simpanan Pokok</label>
            <input
              type="text"
              name="simpananPokok"
              id="simpananPokok"
              value={"Rp.99.000.000,00"}
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="simpananWajib">Simpanan Wajib</label>
            <div className="flex mt-2 gap-3">
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="simpananSukarela">Simpanan Sukarela</label>
            <input
              type="text"
              name="simpananSukarela"
              id="simpananSukarela"
              value={"Rp.99.000.000,00"}
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Detail Pinjaman
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="min-w-[175px]">
              <div>
                <label htmlFor="idCabang">Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Genetared"
                  value={21}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="min-w-[290px]">
              <div>
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="text"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  value={"Rp.99.000.000,00"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  value={"M Syakur"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  value={"01281"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[175px]">
              <div>
                <label htmlFor="idCabang">Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Genetared"
                  value={21}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="min-w-[290px]">
              <div>
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="text"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  value={"Rp.99.000.000,00"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  value={"M Syakur"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  value={"01281"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 place-self-end">
        <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
          <Link
            href={
              "/daftar-anggota/form-simpanan-pinjaman/anggota-lama/simpanan"
            }
          >
            Tambah Simpanan
          </Link>
        </button>
        <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
          <Link
            href={
              "/daftar-anggota/form-simpanan-pinjaman/anggota-lama/pinjaman"
            }
          >
            Tambah Pinjaman
          </Link>
        </button>
      </div>
    </>
  );
};

export default Detail;
